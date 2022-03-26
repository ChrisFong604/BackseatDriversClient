import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";
import React, {useState, useEffect} from 'react';


export default function Testing() {
    
  const [origin, setOrigin] = useState('V7C2X4')
  const [destination, setDestination] = useState('SFU+Burnaby')

  return (

    <div>
      <Link href="/test2" passHref>
          <button >Sign in</button>
      </Link>
      <div>hello</div>

    

    </div>
  ) 
}