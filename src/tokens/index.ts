import { TokensClient } from "../model";
import { handleSdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const tokensClient: TokensClient = {
  create(merchantId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.tokens.create(merchantId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  get(merchantId, tokenId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.tokens.get(merchantId, tokenId, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  update(merchantId, tokenId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.tokens.update(merchantId, tokenId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  remove(merchantId, tokenId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.tokens.remove(merchantId, tokenId, paymentContext, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
  approvesepadirectdebit(merchantId, tokenId, postData, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.tokens.approvesepadirectdebit(merchantId, tokenId, postData, paymentContext || null, (error, response) => {
        handleSdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = tokensClient;
