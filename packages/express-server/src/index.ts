// src/index.ts
import express from "express";

import { getBalance } from "./blockchain/query";
import { getPrivateKey } from "./blockchain/tools";

const app = express();
const port = 3000;
const hostname = "0.0.0.0";

app.get("/", (req, res) => {
  res.send("aaa:" + getPrivateKey("123456@web3easyaccess.link", "123456"));
  // res.send("Hello, TypeScript with Express!");
});

app.get("/ea/getBalance", (req, res) => {
  var address = req.query["address"];
  var bbb;
  if (typeof address == "string") {
    getBalance(address).then((x) => {
      bbb = x;
      var result = {
        balance: bbb,
      };
      res.send(JSON.stringify(result));
    });
    return;
  } else {
    bbb = "0";
  }
  res.send(`balance2=${bbb}`);
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
