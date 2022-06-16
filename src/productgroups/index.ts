import { ProductgroupsClient } from "../model";
import { handleSdkResponse } from "../util";
import { ProductgroupsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/productgroups";

export function wrapProductgroupsClient(client: ConnectClient): ProductgroupsClient {
  return {
    find: (merchantId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.find(merchantId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, paymentProductGroupId, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, paymentProductGroupId, paymentContext, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    deviceFingerprint: (merchantId, paymentProductGroupId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.deviceFingerprint(merchantId, paymentProductGroupId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
