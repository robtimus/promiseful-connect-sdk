import { MandatesClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const mandatesClient: MandatesClient = {
  create(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.mandates.create(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  createWithMandateReference(merchantId, uniqueMandateReference, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.mandates.createWithMandateReference(merchantId, uniqueMandateReference, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, uniqueMandateReference, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.mandates.get(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  block(merchantId, uniqueMandateReference, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.mandates.block(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  unblock(merchantId, uniqueMandateReference, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.mandates.unblock(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  revoke(merchantId, uniqueMandateReference, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.mandates.revoke(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = mandatesClient;
