/* eslint-disable @typescript-eslint/no-non-null-assertion */

import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("riskassessments", () => {
  describe("for bankaccounts", () => {
    test("called successfully", () => {
      const body = {
        order: {
          amountOfMoney: {
            currencyCode: "EUR",
            amount: 100,
          },
          customer: {
            locale: "en_GB",
          },
        },
        bankAccountBban: {
          countryCode: "DE",
          accountNumber: "0532013000",
          bankCode: "37040044",
        },
      };

      return connectSdk.riskassessments.bankaccounts(config.merchantId, body).then((responseBody) => {
        expect(responseBody.results).not.toBeNull();
        expect(responseBody.results).not.toBe([]);
      });
    });
  });
});
