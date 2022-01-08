import { PaymentsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const paymentsClient: PaymentsClient = {
  create(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.create(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  find(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.find(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.get(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  complete(merchantId, paymentId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.complete(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  thirdPartyStatus(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.thirdPartyStatus(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  tokenize(merchantId, paymentId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.tokenize(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  processchallenged(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.processchallenged(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  approve(merchantId, paymentId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.approve(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  capture(merchantId, paymentId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.capture(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancelapproval(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.cancelapproval(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  captures(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.captures(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  refund(merchantId, paymentId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.refund(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  refunds(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.refunds(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancel(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.cancel(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  dispute(merchantId, paymentId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.dispute(merchantId, paymentId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  disputes(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.disputes(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  devicefingerprint(merchantId, paymentId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.payments.devicefingerprint(merchantId, paymentId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = paymentsClient;
