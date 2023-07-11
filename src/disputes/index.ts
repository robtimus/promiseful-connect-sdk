import { DisputesClient } from "../model";
import { handleSdkResponse } from "../util";
import { DisputesClient as ConnectClient } from "connect-sdk-nodejs/lib/model/disputes";

export function wrapDisputesClient(client: ConnectClient): DisputesClient {
  return {
    get: (merchantId, disputeId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, disputeId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    submit: (merchantId, disputeId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.submit(merchantId, disputeId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancel: (merchantId, disputeId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancel(merchantId, disputeId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    uploadFile: (merchantId, disputeId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.uploadFile(merchantId, disputeId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
