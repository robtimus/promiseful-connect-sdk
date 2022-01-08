# Ingenico Connect Node.js promiseful SDK

A wrapper around [connect-sdk-nodejs](https://github.com/Ingenico-ePayments/connect-sdk-nodejs) that uses promises instead of callbacks. This has some advantages:

* The check whether or not the response is successful has been done by the wrapper. You no longer need to do this yourself.
* The promises are resolved to the typed response bodies. You no longer need to cast the response body yourself (TypeScript only).\
  For binary files, the response body and file meta data have been merged into one object; this has the following properties:
  * `content`: the response body
  * `contentType`: the file's content type
  * `contentLength`: the file's content length, if available
  * `filename`: the filename as retrieved from the Content-Disposition, if available
* The full power of promises is at your disposal: chaining, finally, etc.

## Comparison with connect-sdk-nodejs

This wrapper exposes most of the functionality of `connect-sdk-nodes` as possible in the exact same way. This includes the way the SDK wrapper is initialized. The only differences are functions that use callbacks:
* Calls like Create Payment, Convert Amount, etc.
* Webhook helper methods (`validate`, `unmarshal`).
* Webhooks secret key stores. This means that the webhooks helper from this wrapper is initialized differently. However, the original webhooks helper is wrapped, so if you have a secret key store implementation that still uses callbacks, you can just initialize the `connect-sdk-nodejs` webhooks helper, then use the webhooks helper from this wrapper:
   ```
   import originalSdk = require("connect-sdk-nodejs");
   import connectSdk = require("promiseful-connect-sdk");

   originalSdk.webhooks.init(...);
   const webhooks = connectSdk.webhooks;
   // webhooks.unmarshal returns a promise, yet works with the callback-based secret key store
   ```

Here are some examples, where `connectSdk` is an initialized wrapper.

Create a payment:
```
connectSdk.payments
  .create(merchantId, body, paymentContext)
  .then((createResponse) => {
    // createResponse is a CreatePaymentResponse
  })
  .catch((error) => {
    // error is either the error passed to callbacks, or a non-success SdkResponse object
  });
```

Unmarshall a webhooks event:
```
webhooks
  .unmarshal(body, headers)
  .then((event) => {
    // event is a WebhooksEvent
  })
  .catch((error) => {
    // unmarshalling failed
  });
```

## Requirements

Node.js 8 or higher is required. In addition, `connect-sdk-nodejs` version 4.0.0 or higher is required.

## Installation

From the folder where your `package.json` is located, run the following command to install the SDK wrapper:

    npm i promiseful-connect-sdk

It's advised to do this in addition to installing `connect-sdk-nodejs`, so you can take full control over its version.

## Building the repository

From the root of the project install all dependencies, then compile the code:

    npm install
    npm run build

## Testing

There are two types of tests:

1. Unit tests. These will work out-of-the-box.\
   Run these tests as follows:

    ```
    npm run test:unit
    ```
2. Integration tests. Before you can run these, you first need to copy file `__tests__/config.json.dist` to `__tests__/config.json` and replace all values as needed.\
   Run these tests as follows:

    ```
    npm run test:integration
    ```

You can also run both types of tests together as follows:

    npm run test