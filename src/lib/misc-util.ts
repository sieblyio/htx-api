export function neverGuard(x: never, msg: string): Error {
  return new Error(`Unhandled value exception "${x}", ${msg}`);
}

export function isObjectLike(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function omitKeys(
  source: Record<string, unknown>,
  keysToOmit: string[],
): Record<string, unknown> {
  const result: Record<string, unknown> = {};

  for (const key of Object.keys(source)) {
    if (!keysToOmit.includes(key)) {
      result[key] = source[key];
    }
  }

  return result;
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

export function removeInternalParamFields<TParams>(params: TParams): TParams {
  if (Array.isArray(params)) {
    return params.map(removeInternalParamFields) as TParams;
  }

  if (!isRecord(params)) {
    return params;
  }

  return omitKeys(params, ['signRequest']) as TParams;
}

export function getStringOrUndefined(value: unknown): string | undefined {
  return typeof value === 'string' ? value : undefined;
}
