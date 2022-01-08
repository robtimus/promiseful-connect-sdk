import { HostedcheckoutsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const hostedcheckoutsClient: HostedcheckoutsClient = {
  create(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.hostedcheckouts.create(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, hostedCheckoutId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.hostedcheckouts.get(merchantId, hostedCheckoutId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  remove(merchantId, hostedCheckoutId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.hostedcheckouts.remove(merchantId, hostedCheckoutId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = hostedcheckoutsClient;
