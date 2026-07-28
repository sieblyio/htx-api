import { WebsocketClient } from '../../../src/WebsocketClient';
import {
  WS_KEY_MAP,
  WSOperation,
  WsKey,
  WSTopicRequest,
} from '../../../src/lib/websocket/websocket-util';

class TestWebsocketClient extends WebsocketClient {
  public buildRequestEvents(
    wsKey: WsKey,
    operation: WSOperation,
    requests: WSTopicRequest[],
  ) {
    return this.getWsRequestEvents(wsKey, operation, requests);
  }

  public buildAuthEvent(wsKey: WsKey) {
    return this.getWsAuthRequestEvent(wsKey);
  }
}

describe('V5 private derivatives WebSocket', () => {
  it('uses the derivatives topic subscription protocol', async () => {
    const client = new TestWebsocketClient();

    await expect(
      client.buildRequestEvents(WS_KEY_MAP.derivativesPrivateV5, 'subscribe', [
        {
          topic: 'trade',
          payload: { contract_code: 'BTC-USDT' },
        },
      ]),
    ).resolves.toEqual([
      {
        requestKey: expect.any(String),
        requestEvent: {
          op: 'sub',
          cid: expect.any(String),
          topic: 'trade',
          contract_code: 'BTC-USDT',
        },
      },
    ]);
  });

  it('signs authentication against the V5 endpoint path', async () => {
    const signInputs: string[] = [];
    const client = new TestWebsocketClient({
      apiKey: 'test-key',
      apiSecret: 'test-secret',
      customSignMessageFn: async (message) => {
        signInputs.push(message);
        return 'test-signature';
      },
      wsEnvironment: 'aws',
    });

    await expect(
      client.buildAuthEvent(WS_KEY_MAP.derivativesPrivateV5),
    ).resolves.toMatchObject({
      AccessKeyId: 'test-key',
      Signature: 'test-signature',
      op: 'auth',
      type: 'api',
    });

    expect(signInputs).toHaveLength(1);
    expect(signInputs[0]).toContain('GET\napi.hbdm.vn\n/ws/v5/notification\n');
  });
});
