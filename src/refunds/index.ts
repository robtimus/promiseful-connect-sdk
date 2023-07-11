import { RefundsClient } from "../model";
import { handleSdkResponse } from "../util";
import { RefundsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/refunds";

export function wrapRefundsClient(client: ConnectClient): RefundsClient {
  return {
    find: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.find(merchantId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, refundId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, refundId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    approve: (merchantId, refundId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.approve(merchantId, refundId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancel: (merchantId, refundId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancel(merchantId, refundId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancelapproval: (merchantId, refundId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancelapproval(merchantId, refundId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
