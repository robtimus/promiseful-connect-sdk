import { HostedcheckoutsClient } from "../model";
import { handleSdkResponse } from "../util";
import { HostedcheckoutsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/hostedcheckouts";

export function wrapHostedcheckoutsClient(client: ConnectClient): HostedcheckoutsClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, hostedCheckoutId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, hostedCheckoutId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    remove: (merchantId, hostedCheckoutId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.remove(merchantId, hostedCheckoutId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
