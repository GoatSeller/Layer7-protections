import express from "express";
import { checkIp } from "../checkip";

const index = (req: express.Request, res: express.Response) => {
  let ip: string | undefined = req.connection.remoteAddress;

  ip === undefined ? console.log("[ERROR] Invalid IP") : res.send("IP: " + ip);

  checkIp(ip);
};

export default index;
