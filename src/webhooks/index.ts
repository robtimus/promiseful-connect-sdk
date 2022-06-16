import { RequestHeaders } from "connect-sdk-nodejs/lib/model/webhooks";
import { WebhooksEvent } from "connect-sdk-nodejs/lib/model/domain/webhooks";
import { InMemorySecretKeyStore, WebhooksHelper } from "./model";
import { InMemorySecretKeyStore as ConnectSecretKeyStore, WebhooksHelper as ConnectHelper } from "connect-sdk-nodejs/lib/model/webhooks";

function validate(body: string | Buffer, requestHeaders: RequestHeaders, helper: ConnectHelper): Promise<void> {
  return new Promise((resolve, reject) => {
    helper.validate(body, requestHeaders, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function unmarshal(body: string | Buffer, requestHeaders: RequestHeaders, helper: ConnectHelper): Promise<WebhooksEvent> {
  return new Promise((resolve, reject) => {
    helper.unmarshal(body, requestHeaders, (error, event) => {
      if (event) {
        resolve(event);
      } else {
        reject(error);
      }
    });
  });
}

function wrapInMemoryKeyStore(store: ConnectSecretKeyStore): InMemorySecretKeyStore {
  return {
    getSecretKey: (keyId) => {
      return new Promise((resolve, reject) => {
        store.getSecretKey(keyId, (error, secretKey) => {
          if (secretKey !== null) {
            resolve(secretKey);
          } else {
            reject(error);
          }
        });
      });
    },
    storeSecretKey: (keyId, secretKey) => {
      store.storeSecretKey(keyId, secretKey);
    },
    removeSecretKey: (keyId) => {
      store.removeSecretKey(keyId);
    },
    clear: () => {
      store.clear();
    },
  };
}

export function wrapWebhooksHelper(helper: ConnectHelper): WebhooksHelper {
  const webhooksHelper: WebhooksHelper = {
    init: (context) => {
      helper.init({
        getSecretKey(keyId, cb) {
          context
            .getSecretKey(keyId)
            .then((secretKey) => cb(null, secretKey))
            .catch((error) => cb(error, null));
        },
      });
      return webhooksHelper;
    },
    initWithCallbacks: (context) => {
      helper.init(context);
      return webhooksHelper;
    },

    validate: (body, requestHeaders) => validate(body, requestHeaders, helper),
    unmarshal: (body, requestHeaders) => unmarshal(body, requestHeaders, helper),

    inMemorySecretKeyStore: wrapInMemoryKeyStore(helper.inMemorySecretKeyStore),
  };
  return webhooksHelper;
}
