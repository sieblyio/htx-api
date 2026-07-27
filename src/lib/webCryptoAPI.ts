import { neverGuard } from './misc-util.js';

function bufferToB64(buffer: ArrayBuffer): string {
  let binary = '';
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (let i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return globalThis.btoa(binary);
}

// function b64ToBytes(b64: string) {
//   return Uint8Array.from(globalThis.atob(b64), (c) => c.charCodeAt(0));
// }

function latin1ToBytes(s: string) {
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i) & 0xff;
  return out;
}

export type SignEncodeMethod = 'hex' | 'base64' | 'binary';
export type SignAlgorithm = 'SHA-256' | 'SHA-512';

interface UTF8Encoder {
  encode(input?: string): Uint8Array<ArrayBuffer>;
}

export type SignKeyType = 'HMAC' | 'RSASSA-PKCS1-v1_5' | 'Ed25519';

export function getSignKeyType(secret: string): SignKeyType {
  if (secret.includes('PRIVATE KEY')) {
    // Sometimes, not always, RSA keys include "RSA" in the header. That's a definite RSA key.
    if (secret.includes('RSA PRIVATE KEY')) {
      return 'RSASSA-PKCS1-v1_5';
    }

    // RSA keys are significantly longer than Ed25519 keys. 150 accounts for length of header & footer
    if (secret.length <= 150) {
      return 'Ed25519';
    }

    return 'RSASSA-PKCS1-v1_5';
  }
  return 'HMAC';
}

async function importKey(
  pem: string,
  type: SignKeyType,
  algorithm: SignAlgorithm,
  encoder: UTF8Encoder,
): ReturnType<typeof globalThis.crypto.subtle.importKey> {
  switch (type) {
    case 'Ed25519':
    case 'RSASSA-PKCS1-v1_5': {
      // const prefixRSA = /-----BEGIN RSA PRIVATE KEY-----/;
      // const prefixEd25519 = /-----BEGIN PRIVATE KEY-----/;

      // const suffixRSA = /-----END RSA PRIVATE KEY-----/;
      // const suffixEd25519 = /-----END PRIVATE KEY-----/;

      // const base64Key = pem
      //   .replace(prefixEd25519, '')
      //   .replace(prefixRSA, '')
      //   .replace(suffixEd25519, '')
      //   .replace(suffixRSA, '')
      //   .replace(/\s+/g, ''); // Remove spaces and newlines

      const base64Key = pem.replace(
        /(?:-----BEGIN RSA PRIVATE KEY-----|-----BEGIN PRIVATE KEY-----|-----END RSA PRIVATE KEY-----|-----END PRIVATE KEY-----|\s+)/g,
        '',
      );

      const binaryKey = Uint8Array.from(atob(base64Key), (c) =>
        c.charCodeAt(0),
      );

      return globalThis.crypto.subtle.importKey(
        'pkcs8',
        binaryKey.buffer,
        { name: type, hash: { name: algorithm } },
        false,
        ['sign'],
      );
    }
    case 'HMAC': {
      return globalThis.crypto.subtle.importKey(
        'raw',
        encoder.encode(pem),
        { name: type, hash: algorithm },
        false,
        ['sign'],
      );
    }
    default: {
      throw neverGuard(type, `Unhandled key type: "${type}"`);
    }
  }
}

/**
 * Similar to node crypto's `createHash()` function
 */
export async function hashMessage(
  message: string,
  method: SignEncodeMethod,
  algorithm: SignAlgorithm,
): Promise<string> {
  const encoder = new TextEncoder();

  const buffer = await globalThis.crypto.subtle.digest(
    algorithm,
    encoder.encode(message),
  );

  switch (method) {
    case 'hex': {
      return Array.from(new Uint8Array(buffer))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
    }
    case 'base64': {
      return bufferToB64(buffer);
    }
    case 'binary': {
      // Equivalent in node:crypto:
      // const signMessage = createHash(algorithm)
      //   .update(signInput)
      //   .digest('binary');
      return String.fromCharCode(...new Uint8Array(buffer));
    }
    default: {
      throw neverGuard(method, `Unhandled sign method: "${method}"`);
    }
  }
}

export interface SignMessageOptions {
  isSecretB64Encoded?: boolean;
  isInputBinaryString?: boolean;
}

/**
 * Sign a message, with a secret, using the Web Crypto API
 */
export async function signMessage(
  message: string,
  secret: string,
  method: SignEncodeMethod,
  algorithm: SignAlgorithm,
  options?: SignMessageOptions,
): Promise<string> {
  const encoder = new TextEncoder();

  const signKeyType = getSignKeyType(secret);

  const signMethod =
    signKeyType === 'HMAC'
      ? method
      : options?.isSecretB64Encoded
        ? 'base64'
        : method;

  const signInput = options?.isInputBinaryString
    ? latin1ToBytes(message)
    : encoder.encode(message);

  const key = await importKey(secret, signKeyType, algorithm, encoder);

  const buffer = await globalThis.crypto.subtle.sign(
    { name: signKeyType },
    key,
    signInput,
  );

  switch (signMethod) {
    case 'hex': {
      return Array.from(new Uint8Array(buffer))
        .map((byte) => byte.toString(16).padStart(2, '0'))
        .join('');
    }
    case 'base64': {
      return bufferToB64(buffer);
    }
    case 'binary': {
      return String.fromCharCode(...new Uint8Array(buffer));
    }
    default: {
      throw neverGuard(signMethod, `Unhandled sign method: "${signMethod}"`);
    }
  }
}

export function checkWebCryptoAPISupported() {
  if (!globalThis.crypto) {
    throw new Error(
      `Web Crypto API unavailable. Authentication will not work.

Are you using an old Node.js release? Refer to the current Node.js LTS version. Node.js v18 reached end of life in April 2025! You should be using Node LTS or newer (v22 or above)!`,
    );
  }
}
