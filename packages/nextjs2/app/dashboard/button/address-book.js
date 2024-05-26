// pages/address-book.js
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/AddressBook.module.css';

const AddressBook = () => {
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
              <Image
                src="/address-icon.jpg"
                alt="Address Icon"
                width={30}
                height={30}
              />
              <div>
                <h2>Laudable Sepolia Safe</h2>
                <p>sep:0x0FE96A6e1604b5afB46BCb807689674ae947554</p>
              </div>
              <button className={styles.sendButton}>Send</button>
            </div>
          </section>
        );
      case 'apps':
        return <div>Apps Content</div>;
      case 'settings':
        return <div>Settings Content</div>;
      default:
        return null;
    }
  };

  return (
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
            <h3>Laudable Sepolia Safe</h3>
            <p>sep:0x0FE9...7554</p>
            <p>0 ETH</p>
          </div>
        </div>
        <nav>
          <ul className={styles.navList}>
            <li className={activeTab === 'home' ? styles.active : ''} onClick={() => setActiveTab('home')}>Home</li>
            <li className={activeTab === 'assets' ? styles.active : ''} onClick={() => setActiveTab('assets')}>Assets</li>
            <li className={activeTab === 'transactions' ? styles.active : ''} onClick={() => setActiveTab('transactions')}>Transactions</li>
            <li className={activeTab === 'addressBook' ? styles.active : ''} onClick={() => setActiveTab('addressBook')}>Address book</li>
            <li className={activeTab === 'apps' ? styles.active : ''} onClick={() => setActiveTab('apps')}>Apps</li>
            <li className={activeTab === 'settings' ? styles.active : ''} onClick={() => setActiveTab('settings')}>Settings</li>
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
  );
};

export default AddressBook;