import { TokensClient } from "../model";
import { handleSdkResponse } from "../util";
import { TokensClient as ConnectClient } from "connect-sdk-nodejs/lib/model/tokens";

export function wrapTokensClient(client: ConnectClient): TokensClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, tokenId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, tokenId, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    update: (merchantId, tokenId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.update(merchantId, tokenId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    remove: (merchantId, tokenId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.remove(merchantId, tokenId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    approvesepadirectdebit: (merchantId, tokenId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.approvesepadirectdebit(merchantId, tokenId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
