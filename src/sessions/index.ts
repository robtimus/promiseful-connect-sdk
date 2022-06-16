import { SessionsClient } from "../model";
import { handleSdkResponse } from "../util";
import { SessionsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/sessions";

export function wrapSessionsClient(client: ConnectClient): SessionsClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
