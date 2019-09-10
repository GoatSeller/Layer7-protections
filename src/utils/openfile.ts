const ip2proxy = require('ip2proxy-nodejs');

const openFile = (file: any): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    ip2proxy.Open(file) === 0
      ? resolve('it works')
      : reject(new Error('Cant open file'));
  });

export default openFile;
