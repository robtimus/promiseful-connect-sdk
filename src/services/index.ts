import { ServicesClient } from "../model";
import { handleSdkResponse } from "../util";
import { ServicesClient as ConnectClient } from "connect-sdk-nodejs/lib/model/services";

export function wrapServicesClient(client: ConnectClient): ServicesClient {
  return {
    convertAmount: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.convertAmount(merchantId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    bankaccount: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.bankaccount(merchantId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    getIINdetails: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.getIINdetails(merchantId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    privacypolicy: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.privacypolicy(merchantId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    testconnection: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.testconnection(merchantId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
