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
import {  SetStateAction, useEffect, useState } from "react"

import { keccak256, toHex, getContract, formatEther } from "viem";

import { generatePrivateKey, privateKeyToAccount } from "viem/accounts";


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

 

export default  function MaskDialog({email}:Props) {
    
    useEffect(()=>{
            console.log("props.user=================>88",email,inputValue);  
          
          
    },[email])

const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: { target: { value: SetStateAction<string> } }) => {
    setInputValue(event.target.value);

    if (event.target.value.length < 6) {
        // alert("不能小于6")

        const handler = setTimeout(() => {
            alert("不能小于6")
          }, 500);
          return () => {
            clearTimeout(handler);
          };

    }

    console.log(inputValue,"---------");
    
  };

    function hangeClick(){
        console.log(888);
        const hashem =   getPrivateKey(email, inputValue);
        console.log("hashem=================>hashem",hashem);
      }

      return (
        <Dialog>
        <DialogTrigger asChild>
          <Button variant="outline">Edit Profile</Button>
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
                pin
              </Label>
              <Input
                id="name"
                defaultValue=""
                className="col-span-3"
                value={inputValue}
                onChange={handleInputChange}
               
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="username" className="text-right">
                Username
              </Label>
              <Input
                id="username"
                defaultValue="@peduarte"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={hangeClick}>save changes</Button>
            {/* <NewButton /> */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
      );
}