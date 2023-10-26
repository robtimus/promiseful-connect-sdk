/* eslint-disable @typescript-eslint/no-non-null-assertion */

import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("paymentProductGroup", () => {
  test("with id 'cards' retrieved successfully", () => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR",
    };

    return connectSdk.productgroups.get(config.merchantId, "cards", query).then((responseBody) => {
      expect(responseBody.id).toBe("cards");
    });
  });
});
