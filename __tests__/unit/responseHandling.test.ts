import { Server } from "http";
import * as express from "express";
import * as bodyParser from "body-parser";
import { ErrorResponse } from "connect-sdk-nodejs/lib/model/domain/errors";
import { TestConnection } from "connect-sdk-nodejs/lib/model/domain/services";
import * as connectSdk from "../../src";

/**
 * @group unit:responseHandling
 */
describe("response handling", () => {
  const errorResult: ErrorResponse = {
    errorId: "1",
    errors: [
      {
        id: "123",
        code: "X",
        message: "error",
      },
    ],
  };

  const app = express();
  app.use(
    bodyParser.raw({
      type: "*/*",
    })
  );
  app.get("/v1/success/services/testconnection", (_, res) => {
    const result: TestConnection = {
      result: "OK",
    };
    res.status(200).json(result);
  });
  app.get("/v1/error/services/testconnection", (_, res) => {
    res.status(500).json(errorResult);
  });
  app.get("/files/v1/success/files/fileId", (_, res) => {
    res.charset = "utf-8";
    res.status(200).contentType("application/octet-stream").header("Content-Disposition", 'attachment; filename="test.txt"').send("Hello World");
  });
  app.get("/files/v1/error/files/fileId", (_, res) => {
    res.status(500).json(errorResult);
  });

  let server: Server;

  beforeAll(() => {
    server = app.listen();

    connectSdk.init({
      host: server.address().address,
      scheme: "http",
      port: server.address().port,
      enableLogging: false,
      apiKeyId: "dummy-key-id",
      secretApiKey: "hello+world",
      integrator: "Tests",
    });
  });

  afterAll(() => {
    server.close();
  });

  describe("expected JSON response", () => {
    it("success", async () => {
      return connectSdk.services.testconnection("success").then((result) => {
        expect(result.result).toBe("OK");
      });
    });

    it("JSON error", async () => {
      return connectSdk.services.testconnection("error").catch((result) => {
        expect(result.status).toBe(500);
        expect(result.body).toStrictEqual(errorResult);
        expect(result.isSuccess).toBe(false);
      });
    });

    it("non-JSON error", async () => {
      return connectSdk.services.testconnection("unknown").catch((result) => {
        expect(result.name).toBe("SyntaxError");
        expect(result.message).toBe("Unexpected token < in JSON at position 0");
        expect(result.status).toBe(404);
        expect(result.body).toMatch(new RegExp("<!DOCTYPE html>.*</html>.*", "s"));
      });
    });
  });

  describe("expected binary response", () => {
    it("success", async () => {
      return connectSdk.files
        .getFile("success", "fileId")
        .then((result) => {
          expect(result.contentType).toBe("application/octet-stream; charset=utf-8");
          expect(result.contentLength).toBe(11);
          expect(result.filename).toBe("test.txt");

          return new Promise<string>((resolve, reject) => {
            let content = "";
            result.content.on("data", (chunk) => (content += chunk));
            result.content.on("end", () => resolve(content));
            result.content.on("error", (err) => reject(err));
          });
        })
        .then((result) => {
          expect(result).toBe("Hello World");
        });
    });

    it("JSON error", async () => {
      return connectSdk.files.getFile("error", "fileId").catch((result) => {
        expect(result.status).toBe(500);
        expect(result.body).toStrictEqual(errorResult);
        expect(result.isSuccess).toBe(false);
      });
    });

    it("non-JSON error", async () => {
      return connectSdk.files.getFile("unknown", "fileId").catch((result) => {
        expect(result.name).toBe("SyntaxError");
        expect(result.message).toBe("Unexpected token < in JSON at position 0");
        expect(result.status).toBe(404);
        expect(result.body).toMatch(new RegExp("<!DOCTYPE html>.*</html>.*", "s"));
      });
    });
  });
});
