const ip2proxy = require('ip2proxy-nodejs');

const isProxy = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    ip2proxy.isProxy(ip) === 1
      ? resolve('it works')
      : reject(new Error('Is not a proxy'));
  });

export default isProxy;
