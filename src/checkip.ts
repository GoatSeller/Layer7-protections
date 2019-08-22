const ip2proxy = require('ip2proxy-nodejs');
const file: string = 'IP2PROXY-LITE-PX1.BIN';
const exec = require('child_process').exec;

export class Check {

    checkIp(ip: string | undefined) {
        if (ip2proxy.Open(file) === 0) {
            if (ip2proxy.isProxy(ip) === 1) {
                exec('iptables -A INPUT -s '+ ip +' -j DROP', (err: any, stdout: any, stderr: any) => {
                    if (err) throw '[ERROR]';
                    console.log(ip + ' DROPPED');
                });
            }
        } else {
            throw '[ERROR] File problems';
        }
        ip2proxy.Close()
    }

}