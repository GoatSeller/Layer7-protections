import openFile from "./utils/openfile";
import isProxy from "./utils/isproxy";
import dropIp from "./utils/dropip";
import onError from "./utils/onerror";
const database_file: string = "IP2PROXY-LITE-PX1.BIN";

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
