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
  console.log("permitChgOwnerPwd,  ------- 111:");
  var eoa = req.body["eoa"];
  var nonce = req.body["nonce"];
  var signature = req.body["signature"];

  var eoa2 = req.body["eoa2"];
  var nonce2 = req.body["nonce2"];
  var signature2 = req.body["signature2"];
  console.log("permitChgOwnerPwd,  ------- 112:", eoa);
  try {
    if (typeof eoa == "string") {
      eoa = eoa.substring(2);
      console.log("permitChgOwnerPwd,  ------- aaa1");
      if (typeof nonce == "string") {
        if (typeof signature == "string") {
          console.log("permitChgOwnerPwd,  ------- aaa2");
          signature = signature.substring(2);

          if (typeof eoa2 == "string") {
            eoa2 = eoa2.substring(2);
            console.log("permitChgOwnerPwd,  ------- aaa1");
            if (typeof nonce2 == "string") {
              if (typeof signature2 == "string") {
                permitChgOwnerPwd(
                  `0x${eoa}`,
                  BigInt(nonce),
                  `0x${signature}`,
                  `0x${eoa2}`,
                  BigInt(nonce2),
                  `0x${signature2}`
                ).then((addr) => {
                  //   query....
                  // query   end ...
                });
              }
            }
          }
        }
      }
    } else {
      res.send("params invalid2! @ out");
    }
  } catch (e) {
    console.log("permitChgOwnerPwd error @ out:", e);
    res.send("params invalid0!");
  }
  console.log("permitChgOwnerPwd @ out,  ------- 113");
});

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
