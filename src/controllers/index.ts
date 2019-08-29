import express from "express";
import { Check } from "../checkip";

const check = new Check();

export const index = (req: express.Request, res: express.Response) => {
  let ip: string | undefined = req.connection.remoteAddress;

  typeof ip === undefined
    ? console.log("[ERROR] Invalid IP")
    : res.send("IP: " + ip);

  check.checkIp(ip);
};
