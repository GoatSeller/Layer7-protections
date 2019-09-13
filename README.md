[![Package version](https://img.shields.io/npm/v/npm-layer7-protections)](https://www.npmjs.com/package/npm-layer7-protections)
[![Package status](https://img.shields.io/npm/dm/npm-layer7-protections.svg)](https://www.npmjs.com/package/npm-layer7-protections)
[![Build Status](https://travis-ci.org/GoatSeller/Layer7-protections.svg?branch=master)](https://travis-ci.org/GoatSeller/Layer7-protections)
[![Coverage Status](https://coveralls.io/repos/github/GoatSeller/Layer7-protections/badge.svg?branch=master)](https://coveralls.io/github/GoatSeller/Layer7-protections?branch=master)
[![Known Vulnerabilities](https://snyk.io//test/github/GoatSeller/Layer7-protections/badge.svg?targetFile=package.json)](https://snyk.io//test/github/GoatSeller/Layer7-protections?targetFile=package.json)
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
      return isProxy(IP);
    })
    .then(() => {
      return dropIp(IP);
    })
    .then(() => {
      console.log('Success');
    })
    .catch(() => {
      console.log('Error');
    });
checkIp(IP, 'IP2PROXY_DATABASE_FILE.bin'); // checkIp uses both modules: isProxy and dropIp
```
## Note
> 'IP2PROXY_DATABASE_FILE.bin' is an example name of the file that you can download via this site: https://lite.ip2location.com/database/px1-ip-country
