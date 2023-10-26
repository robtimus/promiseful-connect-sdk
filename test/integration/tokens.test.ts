/* eslint-disable @typescript-eslint/no-non-null-assertion */

import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("token", () => {
  test("created and deleted successfully", () => {
    const body = {
      paymentProductId: 1,
      card: {
        customer: {
          billingAddress: {
            countryCode: "NL",
          },
        },
        data: {
          cardWithoutCvv: {
            cardholderName: "Jan",
            issueNumber: "12",
            cardNumber: "4567350000427977",
            expiryDate: "1225",
          },
        },
      },
    };

    return connectSdk.tokens.create(config.merchantId, body).then((responseBody) => {
      expect(responseBody.token).not.toBeNull();
      expect(responseBody.isNewToken).toBeDefined();

      if (responseBody.isNewToken) {
        return connectSdk.tokens.remove(config.merchantId, responseBody.token!, {});
      }
    });
  });
});
