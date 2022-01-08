import { PayoutsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const payoutsClient: PayoutsClient = {
  create(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payouts.create(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  find(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payouts.find(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, payoutId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payouts.get(merchantId, payoutId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  approve(merchantId, payoutId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payouts.approve(merchantId, payoutId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancel(merchantId, payoutId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payouts.cancel(merchantId, payoutId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancelapproval(merchantId, payoutId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payouts.cancelapproval(merchantId, payoutId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = payoutsClient;
