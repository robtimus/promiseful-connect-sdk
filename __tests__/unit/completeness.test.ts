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

const additionalProperties = {
  "connectSdk.webhooks": ["initWithCallbacks"],
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function testIdenticalStructure(original: any, wrapper: any, title: string, path: string) {
  if (typeof original === "object") {
    if (wrapper) {
      describe(title, () => {
        const originalProperties = Object.getOwnPropertyNames(original).sort();
        test("same properties", () => {
          const additionalProps: string[] = additionalProperties[path] || [];
          const wrapperProperties = Object.getOwnPropertyNames(wrapper)
            .sort()
            .filter((p) => !additionalProps.includes(p));
          expect(originalProperties).toEqual(wrapperProperties);
        });
        originalProperties.forEach((property) => {
          const originalValue = original[property];
          const wrapperValue = wrapper[property];
          testIdenticalStructure(originalValue, wrapperValue, property, path + "." + property);
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
testIdenticalStructure(connectSdk, wrapper, "identical structure", "connectSdk");
