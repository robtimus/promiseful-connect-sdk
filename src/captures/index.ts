import { CapturesClient } from "../model";
import { handleSdkResponse } from "../util";
import { CapturesClient as ConnectClient } from "connect-sdk-nodejs/lib/model/captures";

export function wrapCapturesClient(client: ConnectClient): CapturesClient {
  return {
    get: (merchantId, captureId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, captureId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    refund: (merchantId, captureId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.refund(merchantId, captureId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
