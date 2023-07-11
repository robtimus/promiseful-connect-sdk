import { FilesClient } from "../model";
import { handleBinarySdkResponse } from "../util";
import { FilesClient as ConnectClient } from "connect-sdk-nodejs/lib/model/files";

export function wrapFilesClient(client: ConnectClient): FilesClient {
  return {
    getFile: (merchantId, fileId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.getFile(merchantId, fileId, paymentContext ?? null, (error, response) => {
          handleBinarySdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
