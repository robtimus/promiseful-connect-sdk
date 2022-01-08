import { HostedmandatemanagementsClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const hostedmandatemanagementsClient: HostedmandatemanagementsClient = {
  create(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.hostedmandatemanagements.create(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, hostedMandateManagementId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.hostedmandatemanagements.get(merchantId, hostedMandateManagementId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = hostedmandatemanagementsClient;
