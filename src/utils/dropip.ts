const exec = require('child_process').exec;

const dropIp = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    exec(
      'iptables -A INPUT -s ' + ip + ' -j DROP',
      (result: any, err: Error) => {
        err ? reject(new Error('Cant drop ip')) : resolve('it works');
      }
    );
  });

export default dropIp;
