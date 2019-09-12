import openFile from './utils/openfile';
import isProxy from './utils/isproxy';
import dropIp from './utils/dropip';
import onError from './utils/onerror';
export const database_file: string = 'IP2PROXY.BIN';

export const checkIp = (ip: string | undefined, path_file: string) => {
  openFile(path_file)
    .then(() => {
      isProxy(ip)
        .then(() => {
          dropIp(ip)
            .then(() => {
              console.log('Success');
              return true;
            })
            .catch(onError);
        })
        .catch(onError);
    })
    .catch(onError);
};
