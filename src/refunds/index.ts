import { RefundsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const refundsClient: RefundsClient = {
  find(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.refunds.find(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, refundId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.refunds.get(merchantId, refundId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  approve(merchantId, refundId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.refunds.approve(merchantId, refundId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancel(merchantId, refundId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.refunds.cancel(merchantId, refundId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancelapproval(merchantId, refundId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.refunds.cancelapproval(merchantId, refundId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = refundsClient;
