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
const { isProxy, dropIp, checkIp } = require('npm-layer7-protections');
isProxy(IP);
dropIp(IP);
checkIp(IP, 'IP2PROXY_DATABASE_FILE.bin'); // installable from https://lite.ip2location.com/database/px1-ip-country
/*
 * checkIp uses both modules: isProxy and droIp
*/
```
