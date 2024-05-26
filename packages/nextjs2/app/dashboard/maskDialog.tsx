"use client"
import Link from "next/link";
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {  SetStateAction, useEffect, useState ,useRef} from "react"

import { keccak256, toHex, getContract, formatEther } from "viem";

import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";
import axios from 'axios';

import signAuth from "./blockchain/signAuthTypedData"


interface Props {
    email:string
}

// 根据客户输入的 pin码生成密钥
function getPrivateKey(email: string, pin: string) {
    var s1 = "web3easyaccess:" + email;
    var s2 = "web3easyaccess:" + pin;
    var ss1 = keccak256(toHex(s1));
    var ss2 = keccak256(toHex(s2));
    var ss3 = ss1.substring(2) + ss2.substring(2);
    const privateKey = keccak256(`0x${ss3}`);
    const account = privateKeyToAccount(privateKey);
    console.log(account.address);
    return privateKey;
  }
  // 防抖函数
function debounce(func: Function, delay: number) {
    let timerId: ReturnType<typeof setTimeout>;
  
    return function (...args: any[]) {
      clearTimeout(timerId);
      timerId = setTimeout(() => {
        // func.apply(this, args);
      }, delay);
    };
  }

// 创建 handleInputDebounced 函数，将输入值传递给 debounce 函数
const handleInputDebounced = debounce((value: string) => {

    let alerts: string[] = [];
  // 校验是否包含数字
  if (!/\d/.test(value)) {
    alerts.push("数字");
  }
  
  // 校验是否包含小写字母
  if (!/[a-z]/.test(value)) {
    alerts.push("小写字母");
  }
  // 校验是否包含大写字母
  if (!/[A-Z]/.test(value)) {
    alerts.push("大写字母");
  }

  // 校验输入长度是否不足6位
  if (value.length < 6) {
    alerts.push("长度不能少于6位");
  }

  // 弹出不同的提示框
  if (alerts.length > 0) {
    // alert(alerts.join("\n"));
    // console.log(alerts.join(', '),"alerts" );
    const massage = alerts.join('、')
    const resdas : any = `inp码必须包含${massage}`
   
    console.log(resdas,"resdasresdas");
  }
  }, 500);

export default  function MaskDialog({email}:Props) {
    const [open, setOpen] = useState(false);

    const buttonRef = useRef(null);
    useEffect(() => {
        const timer = setTimeout(() => {
          // 在DOM更新后自动触发按钮点击事件
        //   if (buttonRef.current) {
        //       buttonRef.current.click();
        //   }
        setOpen(true); // 关闭弹窗
        }, 0);
        return () => clearTimeout(timer);
      }, []);

    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
    // 在500毫秒内没有输入内容时触发警告
    handleInputDebounced(event.target.value);
      };

    function hangeClick(){

        if (inputValue === '') {
            alert("pin码不能为空")
            return
        }else {
        const hashem =  getPrivateKey(email, inputValue); 
        console.log(inputValue,email,"注册pin码===================inputValue")
        signAuth(hashem).then((e)=>{
        console.log("resda=================>resda",e);
        if (e) {
            handlePostRequest(e);
            localStorage.setItem('hashE', JSON.stringify(e));
        }
       })
        setOpen(false); // 关闭弹窗
        }
        
           
    }
    // 定义状态变量来保存请求结果
    // const [responseData, setResponseData] = useState(null); // 保存响应数据
      // 使用 useEffect 在组件加载时发起请求
//     useEffect(() => {
//         handlePostRequest();
//   }, []); // 空数组表示只在组件加载时执行一次

   // 发起 POST 请求
   const handlePostRequest = async (_postData : any) => {
    console.log(_postData,"======================_postData");
    
    try {
      // 要发送的数据
    //   const postData = {
    //     eoa:"0x1F8636f77eB7b39cFF1c102FF0050Edf02E7561e",
    //     nonce:"1716648280000",
    //     signature:"0x455c24b229af9db721aba6b4f51198b1cbd709231da8c11b670419f6d12ad8f8620be417fbd38c5af49ec2ffb60137046c6e914206f3443c1d00b932c1d8abc61c"
    //   };
    let postData = _postData
      // 发送 POST 请求 http://43.130.234.172:3000/permitRegister
      console.log("===============================>1111111");

      const response = await axios.post('http://43.130.234.172:3000/permitUser', postData);
      console.log(response,"===============================>response");
      // 保存响应数据
    //   setResponseData(response);
    } catch (error) {
    console.log("===============================>error");
      console.error('Error submitting data:', error);
    }
  };
      return (
        <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild style={{ display: 'none' }}>
         <Button ref={buttonRef} variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>SuperCode</DialogTitle>
            <DialogDescription>
              Not to worry about cumbersome private keys anymore, pin code makes your login simple.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                pin :
              </Label>
              <Input
                type="password"
                id="name"
                defaultValue=""
                className="col-span-3"
                // value={"HH0810tt" || inputValue}
                value={inputValue}
                onChange={handleInputChange}
               
              />
            </div>
            <DialogDescription>
                <div>Warm reminder: Losing your pin code means losing access to your account and assets permanently.</div>
            </DialogDescription>
         
          </div>
          <DialogFooter>
            {/* <Button onClick={hangeClick}>save changes</Button> */}
            <Link href={`/dashboard/list/${encodeURIComponent(email)}`} className="link">
            <Button onClick={hangeClick}>Submit</Button>
             </Link>{" "}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      );
}

function setResponseData(data: any) {
    throw new Error("Function not implemented.")
}
