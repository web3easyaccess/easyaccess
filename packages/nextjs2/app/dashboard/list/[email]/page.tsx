"use client"
// export default async function List(){
//   return (
//     <div>我是list 我很棒</div>
//   );
// };
import Image from 'next/image';
// import styles from '../styles/AddressBook.module.css';
import styles from '../../button/AddressBook.module.css';
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
import axios from 'axios';
// pages/dashboard.js
import '../../../style/li.css'
import Head from 'next/head';

import {  SetStateAction, useEffect, useState ,useRef} from "react"
import { User, auth, clerkClient } from "@clerk/nextjs/server";
import { useRouter } from "next/router.js"
import { useParams } from "next/navigation.js"

import getPrivateKey from "../../blockchain/getPrivateKey"
import signAuth from "../../blockchain/signAuthTypedData"

export default function Email({ params }: { params: {
  inputValue(inputValue: any, arg1: string): unknown; email: string 
} }) {


  const [activeTab, setActiveTab] = useState('addressBook');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div>Home Content</div>;
      case 'assets':
        return <div>Assets Content</div>;
      case 'transactions':
        return <div>Transactions Content</div>;
      case 'addressBook':
        return (
          <section className={styles.addressBook}>
            <h1>Address book</h1>
            <div className={styles.addressEntry}>
            
              <div>
                <h2>Laudable Sepolia Safe</h2>
                <p>{addrCa.ca}</p>
              </div>
              <button className={styles.sendButton}>Send</button>
            </div>
          
          </section>
        );
      case 'apps':
        return <div>Apps Content</div>;
      case 'ChangePin':
        return <div>ChangePin Content</div>;
      default:
        return null;
    }
  };

  let email =  decodeURIComponent(params.email);
  console.log(params.inputValue,"inputValue======----------------------------------");
  
  console.log(email,"email----------------------------------");
    const [userEmail, setUserEmail] = useState('');
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (email) {
              setUserEmail(email);
          }
        }
      }, []);

      console.log(userEmail,"====================++++++++email")


  const setPow = ()=>{
    console.log("点击了8888");
    setOpen(true); // open弹窗
    
  }
  const setUser = ()=>{
    console.log("点击了setUser");
    
  }
  type hash =  {
    eoa:string,
    nonce:string,
    signature: string
  }

  const [open, setOpen] = useState(false);
  const [oldPin, setOldPin] = useState('');
  const [newPin, setNewPin] = useState('');
  const [oldPinList, setOldPinList] = useState<hash>();
  const [newPinList, setNewPinList] = useState<hash>();

  const [addrCa, setAddrCa] = useState({ca:'0x9A06adc8627CAEbFDE76c537e18FC1C1667b3b94',balance:'18'});
  
  const oldPinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    console.log(event.target.value);
    setOldPin(event.target.value)
    
    };
  const newPinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    console.log(event.target.value);
    setNewPin(event.target.value)
    
    };
   async function SubmitChanges() {
        if (oldPin === '' || newPin === '') {
          alert("pin码不能为空")
          return
         }else {
         const oldhash : any = await  getPrivateKey(userEmail, oldPin); 
         signAuth(oldhash).then((e)=>{
          setOldPinList(e)
         })
         const newhash : any  = await  getPrivateKey(userEmail, newPin); 
         signAuth(newhash).then((e)=>{
         setNewPinList(e)
         })
         
          if (oldhash && newhash) {
            let postData = {
              eoa:oldPinList?.eoa,
              nonce:oldPinList?.nonce,
              signature:oldPinList?.signature,
              eoa2:newPinList?.eoa,
              nonce2:newPinList?.nonce,
              signature2:newPinList?.signature
              };
             await handlePostRequest(postData);
          }
           
      }
      setOpen(false);   
    }
    const handlePostRequest = async (_postData : any) => {

      try { // permitChgOwnerPwd
        console.log(888888,"==+++++++++++++++++++++++++2");
        const response = await axios.post('http://43.130.234.172:3000/permitChgOwnerPwd', _postData);
        console.log(response);

      } catch (error) {
        console.error('Error submitting data:', error);
      }
    };


    // 查询接口

    useEffect(()=>{
     getUserList()
      
    },[])
    const getUserList = async () => {

      let hashE :any = localStorage.getItem('hashE');
      console.log(JSON.parse(hashE),"===============================localStorage000000");
      const h = JSON.parse(hashE);
      try { // permitUser
          const response = await axios.post('http://43.130.234.172:3000/permitUser', h);
          console.log(response.data,"===============================permitUser");
          setAddrCa(response.data);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
    
    };
    const Register = async ()=>{
      console.log(88888);
      let hashE :any = localStorage.getItem('hashE');
      console.log(JSON.parse(hashE),"===============================localStorage000000");
      const h = JSON.parse(hashE);
      try { // permitUser
        await axios.post('http://43.130.234.172:3000/permitRegister', h);

          getUserList()
          // console.log(response.data.ca,"===============================permitUser");
          // setAddrCa(response.data.ca);
      } catch (error) {
        console.error('Error submitting data:', error);
      }
      
    }

  return (
    <>
     <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild style={{ display: 'none' }}>
         <Button  variant="outline"></Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle> Change Password </DialogTitle>
            <DialogDescription>
              Not to worry about cumbersome private keys anymore, pin code makes your login simple.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
              Old Pin
              </Label>
              <Input
                type="password"
                id="name"
                defaultValue=""
                className="col-span-3"
                value={oldPin}
                onChange={oldPinChange}
               
              />
            </div>
            {/*  */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
              New Pin
              </Label>
              <Input
                type="password"
                id="name"
                defaultValue=""
                className="col-span-3"
                value={newPin}
                onChange={newPinChange}
               
              />
            </div>
            {/*  */}
            <DialogDescription>
                <div>Warm reminder: Losing your pin code means losing access to your account and assets permanently.</div>
            </DialogDescription>
         
          </div>
          <DialogFooter>
            <Button onClick={SubmitChanges}>SubmitChanges</Button>
            
            {/* <Link href="/dashboard/list" passHref className="link">
            <Button onClick={SubmitChanges}>Submit</Button>
             </Link>{" "} */}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
    <div className={styles.container}>
      <Head>
        <title>Address Book</title>
      </Head>
      <aside className={styles.sidebar}>
        <div className={styles.profile}>
          <Image
            src="/profile.jpg"
            alt="Profile Picture"
            width={50}
            height={50}
            className={styles.profilePic}
          />
          <div>
            <h3>s---g</h3>
            <p>{ addrCa.ca ? addrCa.ca.slice(0,8) :""}</p>
            <p>{addrCa.balance} ETH</p>
          </div>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={activeTab === 'home' ? styles.active : ''} onClick={() => setActiveTab('home')}>Home</li>
            <li className={activeTab === 'assets' ? styles.active : ''} onClick={() => setActiveTab('assets')}>Assets</li>
            <li className={activeTab === 'transactions' ? styles.active : ''} onClick={() => setActiveTab('transactions')}>Transactions</li>
            <li className={activeTab === 'addressBook' ? styles.active : ''} onClick={() => setActiveTab('addressBook')}>Address book</li>
            <li className={activeTab === 'ChangePin' ? styles.active : ''} onClick={() => setActiveTab('ChangePin')}> <span onClick={setPow} >ChangePin</span> </li>
            <li className={activeTab === 'apps' ? styles.active : ''} onClick={() => setActiveTab('apps')}><span onClick={Register} >Register</span> </li>
          </ul>
        </nav>
      </aside>
      <main className={styles.mainContent}>
        <header className={styles.header}>
          <button className={styles.newTransaction}>New transaction</button>
        </header>
        {renderContent()}
      </main>
    </div>
    </>
   

  );
}