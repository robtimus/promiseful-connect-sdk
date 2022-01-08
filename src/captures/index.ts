import { CapturesClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const capturesClient: CapturesClient = {
  get(merchantId, captureId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.captures.get(merchantId, captureId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  refund(merchantId, captureId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.captures.refund(merchantId, captureId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = capturesClient;
