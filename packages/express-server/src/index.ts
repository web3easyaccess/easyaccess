// src/index.ts
import express from "express";
import bodyParser from "body-parser";

import {
  getBalance,
  permitUser,
  permitRegister,
  permitChgOwnerPwd,
} from "./blockchain/query";
import { getPrivateKey } from "./blockchain/tools";

const app = express();
app.use(bodyParser.json());

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
  var v = req.body["v"];
  var r = req.body["r"];
  var s = req.body["s"];
  console.log("permitRegister,  ------- 112:", eoa);
  try {
    if (typeof eoa == "string") {
      eoa = eoa.substring(2);
      console.log("permitRegister,  ------- aaa1");
      if (typeof nonce == "string") {
        if (typeof v == "string") {
          if (typeof r == "string") {
            r = r.substring(2);
            if (typeof s == "string") {
              console.log("permitRegister,  ------- aaa2");
              s = s.substring(2);
              permitRegister(
                `0x${eoa}`,
                BigInt(nonce),
                Number(v),
                `0x${r}`,
                `0x${s}`
              ).then((addr) => {
                res.send(JSON.stringify({ userContract: addr }));
              });
            } else {
              res.send("params invalid14");
            }
          } else {
            res.send("params invalid3!");
          }
        } else {
          res.send("params invalid2!");
        }
      } else {
        res.send("params invalid1!");
      }
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
            permitRegister(
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

app.listen(port, hostname, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
