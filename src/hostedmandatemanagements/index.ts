import { HostedmandatemanagementsClient } from "../model";
import { handleSdkResponse } from "../util";
import { HostedmandatemanagementsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/hostedmandatemanagements";

export function wrapHostedmandatemanagementsClient(client: ConnectClient): HostedmandatemanagementsClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, hostedMandateManagementId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, hostedMandateManagementId, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
