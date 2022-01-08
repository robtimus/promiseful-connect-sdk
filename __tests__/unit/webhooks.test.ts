/* eslint-disable @typescript-eslint/no-non-null-assertion */

const validBody = `{
  "apiVersion": "v1",
  "id": "8ee793f6-4553-4749-85dc-f2ef095c5ab0",
  "created": "2017-02-02T11:24:14.040+0100",
  "merchantId": "20000",
  "type": "payment.paid",
  "payment": {
    "id": "00000200000143570012",
    "paymentOutput": {
      "amountOfMoney": {
        "amount": 1000,
        "currencyCode": "EUR"
      },
      "references": {
        "paymentReference": "200001681810"
      },
      "paymentMethod": "bankTransfer",
      "bankTransferPaymentMethodSpecificOutput": {
        "paymentProductId": 11
      }
    },
    "status": "PAID",
    "statusOutput": {
      "isCancellable": false,
      "statusCategory": "COMPLETED",
      "statusCode": 1000,
      "statusCodeChangeDateTime": "20170202112414",
      "isAuthorized": true
    }
  }
}`.replace(/\r\n/, "\n");

const invalidBody = `{
  "apiVersion": "v1",
  "id": "8ee793f6-4553-4749-85dc-f2ef095c5ab0",
  "created": "2017-02-02T11:25:14.040+0100",
  "merchantId": "20000",
  "type": "payment.paid",
  "payment": {
    "id": "00000200000143570012",
    "paymentOutput": {
      "amountOfMoney": {
        "amount": 1000,
        "currencyCode": "EUR"
      },
      "references": {
        "paymentReference": "200001681810"
      },
      "paymentMethod": "bankTransfer",
      "bankTransferPaymentMethodSpecificOutput": {
        "paymentProductId": 11
      }
    },
    "status": "PAID",
    "statusOutput": {
      "isCancellable": false,
      "statusCategory": "COMPLETED",
      "statusCode": 1000,
      "statusCodeChangeDateTime": "20170202112514",
      "isAuthorized": true
    }
  }
}`.replace(/\r\n/, "\n");

const validSignature = "2S7doBj/GnJnacIjSJzr5fxGM5xmfQyFAwxv1I53ZEk=";
const keyId = "dummy-key-id";
const secretKey = "hello+world";

import connectSdk = require("../../src");
const webhooks = connectSdk.webhooks;

/**
 * @group unit:webhooks
 */
describe("webhooks.unmarshal", () => {
  beforeAll(() => {
    webhooks.init({
      getSecretKey: webhooks.inMemorySecretKeyStore.getSecretKey,
    });
  });

  beforeEach(() => {
    webhooks.inMemorySecretKeyStore.clear();
  });

  test("with no secret key available", () => {
    const headers = {
      "x-gcs-signature": validSignature,
      "x-gcs-keyid": keyId,
    };
    return webhooks.unmarshal(validBody, headers).catch((error) => {
      expect(error).not.toBeNull();
      expect(error.message).toBe(`could not find secret key for key id ${keyId}`);
      expect(error).toHaveProperty("keyId", keyId);
    });
  });

  test("with missing headers", () => {
    webhooks.inMemorySecretKeyStore.storeSecretKey(keyId, secretKey);

    const headers = {};
    return webhooks.unmarshal(validBody, headers).catch((error) => {
      expect(error).not.toBeNull();
      expect(error.message).toBe("could not find header 'X-GCS-Signature'");
    });
  });

  test("from string", () => {
    webhooks.inMemorySecretKeyStore.storeSecretKey(keyId, secretKey);

    const headers = {
      "x-gcs-signature": validSignature,
      "x-gcs-keyid": keyId,
    };
    return webhooks.unmarshal(validBody, headers).then((event) => {
      expect(event).not.toBeNull();
      expect(event.apiVersion).toBe("v1");
      expect(event.id).toBe("8ee793f6-4553-4749-85dc-f2ef095c5ab0");
      expect(event.created).toBe("2017-02-02T11:24:14.040+0100");
      expect(event.merchantId).toBe("20000");
      expect(event.type).toBe("payment.paid");

      expect(event.refund).toBeUndefined();
      expect(event.payout).toBeUndefined();
      expect(event.token).toBeUndefined();

      expect(event.payment).not.toBeUndefined();
      expect(event.payment).not.toBeNull();
      expect(event.payment!.id).toBe("00000200000143570012");
    });
  });

  test("from Buffer", () => {
    webhooks.inMemorySecretKeyStore.storeSecretKey(keyId, secretKey);

    const headers = {
      "x-gcs-signature": validSignature,
      "x-gcs-keyid": keyId,
    };
    return webhooks.unmarshal(Buffer.from(validBody), headers).then((event) => {
      expect(event).not.toBeNull();
      expect(event.apiVersion).toBe("v1");
      expect(event.id).toBe("8ee793f6-4553-4749-85dc-f2ef095c5ab0");
      expect(event.created).toBe("2017-02-02T11:24:14.040+0100");
      expect(event.merchantId).toBe("20000");
      expect(event.type).toBe("payment.paid");

      expect(event.refund).toBeUndefined();
      expect(event.payout).toBeUndefined();
      expect(event.token).toBeUndefined();

      expect(event.payment).not.toBeUndefined();
      expect(event.payment).not.toBeNull();
      expect(event.payment!.id).toBe("00000200000143570012");
    });
  });

  test("from invalid body", () => {
    webhooks.inMemorySecretKeyStore.storeSecretKey(keyId, secretKey);

    const headers = {
      "x-gcs-signature": validSignature,
      "x-gcs-keyid": keyId,
    };
    return webhooks.unmarshal(invalidBody, headers).catch((error) => {
      expect(error).not.toBeNull();
      expect(error.message).toBe(`failed to validate signature '${validSignature}'`);
    });
  });

  test("with invalid secret key", () => {
    const invalidSecretKey = "1" + secretKey;
    webhooks.inMemorySecretKeyStore.storeSecretKey(keyId, invalidSecretKey);

    const headers = {
      "x-gcs-signature": validSignature,
      "x-gcs-keyid": keyId,
    };
    return webhooks.unmarshal(validBody, headers).catch((error) => {
      expect(error).not.toBeNull();
      expect(error.message).toBe(`failed to validate signature '${validSignature}'`);
    });
  });

  test("with invalid signature", () => {
    webhooks.inMemorySecretKeyStore.storeSecretKey(keyId, secretKey);

    const invalidSignature = "1" + validSignature;
    const headers = {
      "x-gcs-signature": invalidSignature,
      "x-gcs-keyid": keyId,
    };
    return webhooks.unmarshal(validBody, headers).catch((error) => {
      expect(error).not.toBeNull();
      expect(error.message).toBe(`failed to validate signature '${invalidSignature}'`);
    });
  });
});
