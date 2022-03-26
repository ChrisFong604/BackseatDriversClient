import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navbar';

export default function RiderProfile() {
  

  return (
    
    <div className={styles.container}>
      <NavigationBar/>
      <p>THIS PAGE WILL BE FOR EDITING PROFILE</p>
    </div>
  )
}