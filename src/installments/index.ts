import { InstallmentsClient } from "../model";
import { handleSdkResponse } from "../util";
import { InstallmentsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/installments";

export function wrapInstallmentsClient(client: ConnectClient): InstallmentsClient {
  return {
    getInstallmentsInfo: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.getInstallmentsInfo(merchantId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
