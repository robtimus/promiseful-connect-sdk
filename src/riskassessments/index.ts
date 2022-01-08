import { RiskassessmentsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const riskassessmentsClient: RiskassessmentsClient = {
  bankaccounts(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.riskassessments.bankaccounts(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  cards(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.riskassessments.cards(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = riskassessmentsClient;
