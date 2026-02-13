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

function b64ToBytes(b64: string) {
  return Uint8Array.from(globalThis.atob(b64), (c) => c.charCodeAt(0));
}

function latin1ToBytes(s: string) {
  const out = new Uint8Array(s.length);
  for (let i = 0; i < s.length; i++) out[i] = s.charCodeAt(i) & 0xff;
  return out;
}

export type SignEncodeMethod = 'hex' | 'base64' | 'binary';
export type SignAlgorithm = 'SHA-256' | 'SHA-512';

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

  const key = await globalThis.crypto.subtle.importKey(
    'raw',
    options?.isSecretB64Encoded ? b64ToBytes(secret) : encoder.encode(secret),
    { name: 'HMAC', hash: algorithm },
    false,
    ['sign'],
  );

  const buffer = await globalThis.crypto.subtle.sign(
    'HMAC',
    key,
    options?.isInputBinaryString
      ? latin1ToBytes(message)
      : encoder.encode(message),
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
      return String.fromCharCode(...new Uint8Array(buffer));
    }
    default: {
      throw neverGuard(method, `Unhandled sign method: "${method}"`);
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
