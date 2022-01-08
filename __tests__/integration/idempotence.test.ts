/* eslint-disable @typescript-eslint/no-non-null-assertion */

import uuid = require("uuid");
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("Idempotence", () => {
  test("causes second request to be idempotent", () => {
    const body = {
      order: {
        amountOfMoney: {
          currencyCode: "EUR",
          amount: 100,
        },
        customer: {
          locale: "en_GB",
          billingAddress: {
            countryCode: "NL",
          },
        },
      },
      redirectPaymentMethodSpecificInput: {
        returnUrl: "http://example.com/",
        paymentProductId: 809,
        paymentProduct809SpecificInput: {
          issuerId: "INGBNL2A",
        },
      },
    };

    const idemPotenceKey = uuid.v4();
    const paymentContext = {
      idemPotence: {
        key: idemPotenceKey,
      },
    };

    return connectSdk.payments.create(config.merchantId, body, paymentContext).then((responseBody) => {
      expect(responseBody.payment).not.toBe(null);
      expect(responseBody.payment!.id).not.toBe(null);
      expect(paymentContext.idemPotence.key).toBe(idemPotenceKey);
      expect(connectSdk.context.getIdempotenceRequestTimestamp()).toBeUndefined();

      return connectSdk.payments.create(config.merchantId, body, paymentContext).then((responseBody2) => {
        expect(responseBody2.payment).not.toBe(null);
        expect(responseBody2.payment!.id).toBe(responseBody.payment!.id);
        expect(paymentContext.idemPotence.key).toBe(idemPotenceKey);
        expect(connectSdk.context.getIdempotenceRequestTimestamp()).not.toBeUndefined();
        expect(connectSdk.context.getIdempotenceRequestTimestamp()).not.toBeNull();
      });
    });
  });
});
