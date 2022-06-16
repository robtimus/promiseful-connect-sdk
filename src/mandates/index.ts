import { MandatesClient } from "../model";
import { handleSdkResponse } from "../util";
import { MandatesClient as ConnectClient } from "connect-sdk-nodejs/lib/model/mandates";

export function wrapMandatesClient(client: ConnectClient): MandatesClient {
  return {
    create: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.create(merchantId, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    createWithMandateReference: (merchantId, uniqueMandateReference, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.createWithMandateReference(merchantId, uniqueMandateReference, postData, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    get: (merchantId, uniqueMandateReference, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.get(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    block: (merchantId, uniqueMandateReference, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.block(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    unblock: (merchantId, uniqueMandateReference, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.unblock(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    revoke: (merchantId, uniqueMandateReference, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.revoke(merchantId, uniqueMandateReference, paymentContext || null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
