import * as connectSdk from "connect-sdk-nodejs";
import * as wrapper from "../../src";

wrapper.init({
  host: "test",
  scheme: "http",
  port: 80,
  enableLogging: false,
  apiKeyId: "dummy",
  secretApiKey: "dummy",
  integrator: "dummy",
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function testIdenticalStructure(original: any, wrapper: any, title: string) {
  if (typeof original === "object") {
    if (wrapper) {
      describe(title, () => {
        // no need to test that each property in the wrapper is also in the original;
        // the compiler will catch issues if endpoints are removed etc.
        Object.getOwnPropertyNames(original).forEach((property) => {
          const originalValue = original[property];
          const wrapperValue = wrapper[property];
          testIdenticalStructure(originalValue, wrapperValue, property);
        });
      });
    } else {
      test(title, () => {
        expect(wrapper).toBeTruthy();
      });
    }
  } else {
    test(title, () => {
      expect(typeof wrapper).toBe(typeof original);
      if (typeof original !== "function") {
        expect(wrapper).toBe(original);
      }
    });
  }
}

/**
 * @group unit:completeness
 */
describe("identical structure", () => {
  testIdenticalStructure(connectSdk, wrapper, "connectSdk");
});
