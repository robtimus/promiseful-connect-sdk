import { ProductsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const productsClient: ProductsClient = {
  find(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.find(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, paymentProductId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.get(merchantId, paymentProductId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  directory(merchantId, paymentProductId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.directory(merchantId, paymentProductId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  customerDetails(merchantId, paymentProductId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.customerDetails(merchantId, paymentProductId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  deviceFingerprint(merchantId, paymentProductId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.deviceFingerprint(merchantId, paymentProductId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  networks(merchantId, paymentProductId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.networks(merchantId, paymentProductId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  sessions(merchantId, paymentProductId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.products.sessions(merchantId, paymentProductId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = productsClient;
