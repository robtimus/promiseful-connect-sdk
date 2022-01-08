/* eslint-disable @typescript-eslint/no-non-null-assertion */

import each from "jest-each";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("paymentProducts", () => {
  test("retrieved successfully", () => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR",
    };

    return connectSdk.products.find(config.merchantId, query).then((responseBody) => {
      expect(responseBody.paymentProducts).not.toBeNull();
      expect(responseBody.paymentProducts!.length).not.toBe(0);
    });
  });
});

describe("paymentProduct", () => {
  each([809]).test("with id %d retrieved successfully", (id) => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR",
    };

    return connectSdk.products.get(config.merchantId, id, query).then((responseBody) => {
      expect(responseBody.id).toBe(id);
    });
  });
});
