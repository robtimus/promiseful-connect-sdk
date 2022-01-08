import { RequestHeaders } from "connect-sdk-nodejs/lib/model/webhooks";
import { WebhooksEvent } from "connect-sdk-nodejs/lib/model/domain/webhooks";
import { WebhooksHelper } from "./model";
import delegate = require("connect-sdk-nodejs/lib/webhooks");

function validate(body: string | Buffer, requestHeaders: RequestHeaders): Promise<void> {
  return new Promise((resolve, reject) => {
    delegate.validate(body, requestHeaders, (error) => {
      if (error) {
        reject(error);
      } else {
        resolve();
      }
    });
  });
}

function unmarshal(body: string | Buffer, requestHeaders: RequestHeaders): Promise<WebhooksEvent> {
  return new Promise((resolve, reject) => {
    delegate.unmarshal(body, requestHeaders, (error, event) => {
      if (event) {
        resolve(event);
      } else {
        reject(error);
      }
    });
  });
}

const webhooksHelper: WebhooksHelper = {
  init: (context) => {
    delegate.init({
      getSecretKey(keyId, cb) {
        context
          .getSecretKey(keyId)
          .then((secretKey) => cb(null, secretKey))
          .catch((error) => cb(error, null));
      },
    });
    return webhooksHelper;
  },

  validate: validate,
  unmarshal: unmarshal,

  inMemorySecretKeyStore: {
    getSecretKey(keyId) {
      return new Promise((resolve, reject) => {
        delegate.inMemorySecretKeyStore.getSecretKey(keyId, (error, secretKey) => {
          if (secretKey !== null) {
            resolve(secretKey);
          } else {
            reject(error);
          }
        });
      });
    },
    storeSecretKey(keyId, secretKey) {
      delegate.inMemorySecretKeyStore.storeSecretKey(keyId, secretKey);
    },
    removeSecretKey(keyId) {
      delegate.inMemorySecretKeyStore.removeSecretKey(keyId);
    },
    clear() {
      delegate.inMemorySecretKeyStore.clear();
    },
  },
};

export = webhooksHelper;
