import { assert, expect } from "chai";
import { checkIp, onError, dropIp, isProxy, openFile } from "../src/checkip";

// "oldtest": "./node_modules/.bin/mocha ts-node/register ./test/*.spec.ts",

describe("openFileYES", () => {
  it("should open file", (done: any) => {
    const database_file: string = "bin/IP2PROXY-LITE-PX1.BIN";
    openFile(database_file)
      .then((res: string) => {
        assert.equal(res, "it works", "Value should be it works");
        done();
      })
      .catch((err: any) => {
        done(err);
      });
  });
});

describe("openFileNO", () => {
  it("should not open file", (done: any) => {
    const database_file: string = "asd";
    openFile(database_file)
      .then(() => {
        throw new Error("Cant open file");
      })
      .catch((err: any) => {
        assert.isDefined(err);
        done();
      });
  });
});

describe("isProxyYES", () => {
  it("should be a proxy", (done: any) => {
    const ip: string | undefined = "213.100.168.84";
    isProxy(ip)
      .then((res: string) => {
        assert.equal(res, "it works", "Value should be it works");
        done();
      })
      .catch((err: any) => {
        done(err);
      });
  });
});

describe("isProxyNO", () => {
  it("should not be a proxy", (done: any) => {
    const ip: string | undefined = "1.1.1.1";
    isProxy(ip)
      .then(() => {
        done(new Error("Is not a proxy"));
      })
      .catch((err: any) => {
        assert.isDefined(err);
        done();
      });
  });
});

describe("dropIpYES", () => {
  it("should be dropped", (done: any) => {
    const ip: string | undefined = "127.0.0.1";
    dropIp(ip)
      .then((result: string) => {
        assert.equal(result, "it works", "Value should be it works");
        done();
      })
      .catch((err: any) => {
        done(err);
      });
  });
});

describe("dropIpNO", () => {
  it("should not be dropped", (done: any) => {
    const ip: string | undefined = "127.0.0.1";
    dropIp(ip)
      .then(() => {
        throw new Error("Cant drop ip");
      })
      .catch((err: any) => {
        assert.isDefined(err);
        done();
      });
  });
});

describe("onError", () => {
  it("should be an error", (done: any) => {
    assert.isBoolean(onError("error"));
    done();
  });
});
