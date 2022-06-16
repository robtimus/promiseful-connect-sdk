import { PaymentsClient } from "../model";
import { handleSdkResponse } from "../util";
import { PaymentsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/payments";

export function wrapPaymentsClient(client: ConnectClient): PaymentsClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    find: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.find(merchantId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    complete: (merchantId, paymentId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.complete(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    thirdPartyStatus: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.thirdPartyStatus(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    tokenize: (merchantId, paymentId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.tokenize(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    processchallenged: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.processchallenged(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    approve: (merchantId, paymentId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.approve(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    capture: (merchantId, paymentId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.capture(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancelapproval: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancelapproval(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    captures: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.captures(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    refund: (merchantId, paymentId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.refund(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    refunds: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.refunds(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancel: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancel(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    dispute: (merchantId, paymentId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.dispute(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    disputes: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.disputes(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    devicefingerprint: (merchantId, paymentId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.devicefingerprint(merchantId, paymentId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
