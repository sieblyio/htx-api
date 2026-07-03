import {
  HTXDerivativesWSAPIRequest,
  HTXSpotWSAPIRequest,
  HTXWSAPIRequest,
  WSAPIDerivativesOperation,
  WSAPISpotOperation,
} from '../../types/websockets/ws-api';

export function isSpotWSAPIRequest(
  request: HTXWSAPIRequest,
): request is HTXSpotWSAPIRequest<WSAPISpotOperation, unknown> {
  return 'ch' in request;
}

export function isDerivativesWSAPIRequest(
  request: HTXWSAPIRequest,
): request is HTXDerivativesWSAPIRequest<WSAPIDerivativesOperation, unknown> {
  return 'op' in request;
}
