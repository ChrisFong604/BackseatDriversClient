import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Testing() {
  

  return (

    <div>
      <Link href="/test2" passHref>
          <button >Sign in</button>
      </Link>
      <div>hello</div>

    

    </div>
  ) 
}