import { PayoutsClient } from "../model";
import { handleSdkResponse } from "../util";
import { PayoutsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/payouts";

export function wrapPayoutsClient(client: ConnectClient): PayoutsClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext ?? null, (error, response) => {
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
    get: (merchantId, payoutId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, payoutId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    approve: (merchantId, payoutId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.approve(merchantId, payoutId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancel: (merchantId, payoutId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancel(merchantId, payoutId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cancelapproval: (merchantId, payoutId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cancelapproval(merchantId, payoutId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
