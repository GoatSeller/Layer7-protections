const ip2proxy = require("ip2proxy-nodejs");
const file: string = "IP2PROXY-LITE-PX1.BIN";
const exec = require("child_process").exec;

const checkIp = (ip: string | undefined) => {
  openFile(file)
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
        .catch(() => {
          console.log("Is not a proxy");
        });
    })
    .catch(onError);
};

const openFile = (file: any): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    ip2proxy.Open(file) === 0 ? resolve() : reject(new Error("Cant open file"));
  });

const isProxy = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    ip2proxy.isProxy(ip) === 1 ? resolve() : reject();
  });

const dropIp = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    exec(
      "iptables -A INPUT -s " + ip + " -j DROP",
      (result: any, err: Error) => {
        err ? resolve(result) : reject(new Error("Cant drop ip"));
      }
    );
  });

const onError = (error: unknown): boolean => {
  console.error(error);
  return false;
};

export default checkIp;
