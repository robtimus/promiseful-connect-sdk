import { ProductgroupsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const productgroupsClient: ProductgroupsClient = {
  find(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.productgroups.find(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, paymentProductGroupId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.productgroups.get(merchantId, paymentProductGroupId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  deviceFingerprint(merchantId, paymentProductGroupId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.productgroups.deviceFingerprint(merchantId, paymentProductGroupId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = productgroupsClient;
