import { RiskassessmentsClient } from "../model";
import { handleSdkResponse } from "../util";
import { RiskassessmentsClient as ConnectClient } from "connect-sdk-nodejs/lib/model/riskassessments";

export function wrapRiskassessmentsClient(client: ConnectClient): RiskassessmentsClient {
  return {
    bankaccounts: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.bankaccounts(merchantId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
    cards: (merchantId, postData, paymentContext) => {
      return new Promise((resolve, reject) => {
        client.cards(merchantId, postData, paymentContext ?? null, (error, response) => {
          handleSdkResponse(error, response, resolve, reject);
        });
      });
    },
  };
}
