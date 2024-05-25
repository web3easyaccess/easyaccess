"use client"

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

import signAuth from "./sign/signAuthTypedData"


interface Props {
    email:string
}

function getPrivateKey(email: string, pin: string) {
    var s1 = "web3easyaccess:" + email;
    var s2 = "web3easyaccess:" + pin;
    var ss1 = keccak256(toHex(s1));
    var ss2 = keccak256(toHex(s2));
    var ss3 = ss1.substring(2) + ss2.substring(2);
    // console.log(ss1);
    // console.log(ss2);
    // console.log(ss3);
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
        func.apply(this, args);
      }, delay);
    };
  }

// 创建 handleInputDebounced 函数，将输入值传递给 debounce 函数
const handleInputDebounced = debounce((value: string) => {
    let alerts: string[] = [];
  // 校验是否包含数字
  if (!/\d/.test(value)) {
    alerts.push("包含数字");
  }
  
  // 校验是否包含小写字母
  if (!/[a-z]/.test(value)) {
    alerts.push("包含小写字母");
  }
  // 校验是否包含大写字母
  if (!/[A-Z]/.test(value)) {
    alerts.push("包含大写字母");
  }

  // 校验输入长度是否不足6位
  if (value.length < 6) {
    alerts.push("inp长度不能少于6位");
  }

  // 弹出不同的提示框
  if (alerts.length > 0) {
    // alert(alerts.join("\n"));
    // console.log(alerts.join(', '),"alerts" );
    // const massage = alerts.join(', ')
    // `inp码必须${massage}`

    
  }
  }, 500);

 

export default  function MaskDialog({email}:Props) {

    const buttonRef = useRef(null);
    useEffect(() => {
        // 使用 setTimeout 来延迟执行按钮点击事件
        const timer = setTimeout(() => {
          // 在DOM更新后自动触发按钮点击事件
          if (buttonRef.current) {
              buttonRef.current.click();
          }
        }, 0); // 可以根据需要调整延迟时间
    
        // 清除定时器以避免内存泄漏
        return () => clearTimeout(timer);
      }, []); // 空数组表示只在组件加载完成时执行一次

    const [inputValue, setInputValue] = useState('');

  // 定义 handleInputChange 函数，处理输入框变化事件
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // 更新输入框的值
    setInputValue(event.target.value);
    
    // 在500毫秒内没有输入内容时触发警告
    handleInputDebounced(event.target.value);
      };

    function hangeClick(){
        console.log(888);
        const hashem =   getPrivateKey(email, inputValue);
       
        signAuth(hashem).then((e)=>{

           console.log("resda=================>resda",e);
       })
        console.log("hashem=================>hashem",hashem);
    }

    // 定义状态变量来保存请求结果
    const [responseData, setResponseData] = useState(null); // 保存响应数据
      // 使用 useEffect 在组件加载时发起请求
    useEffect(() => {
        handlePostRequest();
  }, []); // 空数组表示只在组件加载时执行一次

   // 发起 POST 请求
   const handlePostRequest = async () => {
    try {
      // 要发送的数据
      const postData = {
        username: 'exampleUser',
        password: 'examplePassword',
      };
      
      // 发送 POST 请求
      const response = await axios.post('https://api.example.com/post', postData);
      
      // 保存响应数据
      setResponseData(response.data);
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

      return (
        <Dialog>
        <DialogTrigger asChild style={{ visibility: 'hidden' }}>
         <Button ref={buttonRef} variant="outline">Edit Profile</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                pin 码 :
              </Label>
              <Input
                id="name"
                defaultValue=""
                className="col-span-3"
                value={"HH0810tt" || inputValue}
                // value={inputValue}
                onChange={handleInputChange}
               
              />
            </div>
            <DialogDescription>
                <div>Make changes to your profile here. Click save when you're done.</div>
            </DialogDescription>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div> */}
          </div>
          <DialogFooter>
            <Button onClick={hangeClick}>save changes</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      );
}

function setResponseData(data: any) {
    throw new Error("Function not implemented.")
}
