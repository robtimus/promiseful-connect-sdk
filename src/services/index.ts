import { ServicesClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const servicesClient: ServicesClient = {
  convertAmount(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.services.convertAmount(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  bankaccount(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.services.bankaccount(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  getIINdetails(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.services.getIINdetails(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  privacypolicy(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.services.privacypolicy(merchantId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  testconnection(merchantId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.services.testconnection(merchantId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = servicesClient;
