import { WebhooksEvent } from "connect-sdk-nodejs/lib/model/domain/webhooks";
import { RequestHeaders, WebhooksContext as ConnectContext } from "connect-sdk-nodejs/lib/model/webhooks";

export interface InMemorySecretKeyStore extends SecretKeyStore {
  storeSecretKey(keyId: string, secretKey: string): void;
  removeSecretKey(keyId: string): void;
  clear(): void;
}

export interface SecretKeyStore {
  getSecretKey(keyId: string): Promise<string>;
}

export interface WebhooksContext {
  getSecretKey(keyId: string): Promise<string>;
}

export interface WebhooksHelper {
  init(context: WebhooksContext): WebhooksHelper;
  initWithCallbacks(context: ConnectContext): WebhooksHelper;
  validate(body: string | Buffer, requestHeaders: RequestHeaders): Promise<void>;
  unmarshal(body: string | Buffer, requestHeaders: RequestHeaders): Promise<WebhooksEvent>;

  readonly inMemorySecretKeyStore: InMemorySecretKeyStore;
}
