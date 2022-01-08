import { DisputesClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const disputesClient: DisputesClient = {
  get(merchantId, disputeId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.disputes.get(merchantId, disputeId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  submit(merchantId, disputeId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.disputes.submit(merchantId, disputeId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cancel(merchantId, disputeId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.disputes.cancel(merchantId, disputeId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  uploadFile(merchantId, disputeId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.disputes.uploadFile(merchantId, disputeId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = disputesClient;
