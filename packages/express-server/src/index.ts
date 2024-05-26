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

/*
访问系统主合约，根据离线签名创建用户合约。
*/
app.post("/permitUser", (req, res) => {
  console.log("permitUser,  ------- 111:");
  var eoa = req.body["eoa"];
  var nonce = req.body["nonce"];
  var signature = req.body["signature"];
  console.log("permitUser,  ------- 112:", eoa);
  try {
    if (typeof eoa == "string") {
      eoa = eoa.substring(2);
      console.log("permitUser,  ------- aaa1");
      if (typeof nonce == "string") {
        if (typeof signature == "string") {
          console.log("permitUser,  ------- aaa2");
          signature = signature.substring(2);
          permitUser(`0x${eoa}`, BigInt(nonce), `0x${signature}`).then(
            (info) => {
              res.send(JSON.stringify(info));
            }
          );
        }
      }
    } else {
      res.send("params1 invalid2! @ out");
    }
  } catch (e) {
    console.log("permitUser1 error @ out:", e);
    res.send("params1 invalid0!");
  }
  console.log("permitUser @ out,  ------- 113");
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
              //   query....
              permitUser(`0x${eoa}`, BigInt(nonce), `0x${signature}`).then(
                (info) => {
                  res.send(JSON.stringify(info));
                }
              );
              // query   end ...
            }
          );
        }
      }
    } else {
      res.send("params invalid2! @ out");
    }
  } catch (e) {
    console.log("permitRegister error @ out:", e);
    res.send("params invalid0!");
  }
  console.log("permitRegister @ out,  ------- 113");
});

/*
访问系统主合约，根据离线签名 修改密码
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
