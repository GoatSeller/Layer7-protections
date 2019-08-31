const ip2proxy = require("ip2proxy-nodejs");
const database_file: string = "IP2PROXY-LITE-PX1.BIN";
const exec = require("child_process").exec;

export const checkIp = (ip: string | undefined) => {
  openFile(database_file)
    .then(() => {
      isProxy(ip)
        .then(() => {
          dropIp(ip)
            .then(() => {
              console.log("Ip dropped");
              return true;
            })
            .catch(onError);
        })
        .catch(onError);
    })
    .catch(onError);
};

export const openFile = (file: any): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    ip2proxy.Open(file) === 0
      ? resolve("it works")
      : reject(new Error("Cant open file"));
  });

export const isProxy = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    ip2proxy.isProxy(ip) === 1
      ? resolve("it works")
      : reject(new Error("Is not a proxy"));
  });

export const dropIp = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    exec(
      "iptables -A INPUT -s " + ip + " -j DROP",
      (result: any, err: Error) => {
        err ? reject(new Error("Cant drop ip")) : resolve("it works");
      }
    );
  });

export const onError = (error: unknown): boolean => {
  console.error(error);
  return false;
};
