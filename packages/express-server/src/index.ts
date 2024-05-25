// src/index.ts
import express from "express";
import bodyParser from "body-parser";
var cors = require("cors");

import {
  getBalance,
  permitUser,
  permitRegister,
  permitChgOwnerPwd,
} from "./blockchain/query";
import { getPrivateKey } from "./blockchain/tools";

import "./blockchain/signAuthTypedData";

const app = express();
app.use(bodyParser.json());
app.use(cors({ origin: true, credentials: true }));

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

app.get("/permitUser", (req, res) => {
  var eoa = req.query["eoa"];
  var nonce = req.query["nonce"];
  var v = req.query["v"];
  var r = req.query["r"];
  var s = req.query["s"];

  if (typeof eoa == "string") {
    eoa = eoa.substring(2);
    if (typeof nonce == "string") {
      if (typeof v == "string") {
        if (typeof r == "string") {
          r = r.substring(2);
          if (typeof s == "string") {
            s = s.substring(2);
            permitUser(
              `0x{eoa}`,
              BigInt(nonce),
              Number(v),
              `0x{r}`,
              `0x{s}`
            ).then((addr) => {
              res.send(JSON.stringify({ userContract: addr }));
            });
          }
        }
      }
    }
  }
});

/*
访问系统主合约，根据离线签名创建用户合约。
*/
app.post("/permitRegister", (req, res) => {
  console.log("permitRegister,  ------- 111:");
  var eoa = req.body["eoa"];
  var nonce = req.body["nonce"];
  var signature = req.body["signature"];
  console.log("permitRegister,  ------- 112:", eoa);
  try {
    if (typeof eoa == "string") {
      eoa = eoa.substring(2);
      console.log("permitRegister,  ------- aaa1");
      if (typeof nonce == "string") {
        if (typeof signature == "string") {
          console.log("permitRegister,  ------- aaa2");
          signature = signature.substring(2);
          permitRegister(`0x${eoa}`, BigInt(nonce), `0x${signature}`).then(
            (addr) => {
              res.send(JSON.stringify({ userContract: addr }));
            }
          );
        }
      }
    } else {
      res.send("params invalid2!");
    }
  } catch (e) {
    console.log("permitRegister error:", e);
    res.send("params invalid0!");
  }
  console.log("permitRegister,  ------- 113");
});

/*
访问系统主合约，根据离线签名创建用户合约。
*/
app.post("/permitChgOwnerPwd", (req, res) => {
  var eoa = req.query["eoa"];
  var nonce = req.query["nonce"];
  var v = req.query["v"];
  var r = req.query["r"];
  var s = req.query["s"];

  if (typeof eoa == "string") {
    eoa = eoa.substring(2);
    if (typeof nonce == "string") {
      if (typeof v == "string") {
        if (typeof r == "string") {
          r = r.substring(2);
          if (typeof s == "string") {
            s = s.substring(2);
          }
        }
      }
    }
  }
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
