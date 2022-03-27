import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";


import NavigationBar from '../components/navbar';
import 'bootstrap/dist/css/bootstrap.css'
import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import React from 'react'



export default function Home() {
  


  return (
    
    <div className={styles.container}>
      <NavigationBar/>
      
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

        <h1 className={styles.title}>
          Welcome to Backseat Drivers!
        </h1>

        <p className={styles.description}>
          Get started!
          <code className={styles.container}></code>
        </p>

        <div className={styles.grid}>
          <a href="/drivers" className={styles.card}>
            <h2>Post a Ride</h2>
            <p>Click here to post a ride!</p>
          </a>
          
          <a
            href="/postings"
            className={styles.card}
          >
            <h2>Find a Ride</h2>
            <p>Click here to find a ride!</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
