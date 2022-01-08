import { FilesClient } from "../model";
import { handleBinarySdkResponse } from "../util";
import connectSdk = require("connect-sdk-nodejs");

const filesClient: FilesClient = {
  getFile(merchantId, fileId, paymentContext) {
    return new Promise((resolve, reject) => {
      connectSdk.files.getFile(merchantId, fileId, paymentContext || null, (error, response) => {
        handleBinarySdkResponse(error, response, resolve, reject);
      });
    });
  },
};
export = filesClient;
