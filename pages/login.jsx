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
      <Link href="/" passHref>
          <button >Sign in</button>
      </Link>
      <div>hello</div>
      <iframe
        width="450"
        height="250"
        
        
        src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDXYIKlauR9teuVU4RHWACY6T1x_fPbZFY
        &origin= ${origin}
        &destination= ${destination}`}
        
      >
      </iframe>
    </div>
  )
}