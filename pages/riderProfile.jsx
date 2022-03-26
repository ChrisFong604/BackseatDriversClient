import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function RiderProfile() {
  

  return (
    
    <div className={styles.container}>
      <iframe
      width="450"
      height="250"
      src="https://www.google.com/maps/embed/v1/key=AIzaSyDXYIKlauR9teuVU4RHWACY6T1x_fPbZFY"
      >
      </iframe>
    </div>
  )
}