import express from 'express';
import { Check } from "./checkip";

const check = new Check();

const app = express();

app.get('/', (req: express.Request, res: express.Response) => {

    let ip: string | undefined = req.connection.remoteAddress;

    if (typeof ip === undefined) {
        console.log('[ERROR] Invalid IP');
    } else {
        res.send('IP: '+ ip);
    }

    check.checkIp(ip);

});

app.listen(8080, '0.0.0.0', () => {
    console.log('Server started')
});