import { ProductsClient } from "../model";
import { handleSdkResponse } from "../util";
import { ProductsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/products";

export function wrapProductsClient(client: ConnectClient): ProductsClient {
  return {
    find: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.find(merchantId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, paymentProductId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, paymentProductId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    directory: (merchantId, paymentProductId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.directory(merchantId, paymentProductId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    customerDetails: (merchantId, paymentProductId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.customerDetails(merchantId, paymentProductId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    deviceFingerprint: (merchantId, paymentProductId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.deviceFingerprint(merchantId, paymentProductId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    networks: (merchantId, paymentProductId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.networks(merchantId, paymentProductId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    sessions: (merchantId, paymentProductId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.sessions(merchantId, paymentProductId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
