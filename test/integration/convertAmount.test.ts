/* eslint-disable @typescript-eslint/no-non-null-assertion */

import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("convertAmount", () => {
  test("called successfully", () => {
    const query = {
      source: "EUR",
      target: "USD",
      amount: 100,
    };

    return connectSdk.services.convertAmount(config.merchantId, query).then((responseBody) => {
      expect(responseBody.convertedAmount).not.toBeNull();
    });
  });
});
