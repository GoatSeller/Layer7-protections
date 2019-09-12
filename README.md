[![Package version](https://img.shields.io/npm/v/npm-layer7-protections)](https://www.npmjs.com/package/npm-layer7-protections)
[![Build Status](https://travis-ci.org/GoatSeller/Layer7-protections.svg?branch=master)](https://travis-ci.org/GoatSeller/Layer7-protections)
[![Coverage Status](https://coveralls.io/repos/github/GoatSeller/Layer7-protections/badge.svg?branch=master)](https://coveralls.io/github/GoatSeller/Layer7-protections?branch=master)
# Layer7-protections
> Tested on linux based systems using iptables.
## Setup

### npm
```
npm install npm-layer7-protections
```
### yarn
```
yarn add npm-layer7-protections
```
## Usage
```javascript
const { isProxy, dropIp, checkIp, openFile } = require('npm-layer7-protections');
openFile('IP2PROXY_DATABASE_FILE.bin')
  .then(() => {
    isProxy(IP)
      .then(() => {
        console.log('IS A PROXY');
        dropIp(IP)
          .then(() => {
            console.log('SUCCESS');
          })
          .catch(() => {
            console.log('ERROR');
          });
      })
      .catch(() => {
        console.log('IS NOT A PROXY');
      });
  })
  .catch(() => {
    console.log('ERROR');
  });
checkIp(IP, 'IP2PROXY_DATABASE_FILE.bin'); // checkIp uses both modules: isProxy and dropIp
```
## Note
> 'IP2PROXY_DATABASE_FILE.bin' is an example name of the file that you can download via this site: https://lite.ip2location.com/database/px1-ip-country
