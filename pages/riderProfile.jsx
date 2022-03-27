import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navbar';
import { useFormik } from 'formik' 
import { textAlign } from '@mui/system';
import { Grid3x3Sharp } from '@mui/icons-material';
import React from 'react'

export default function RiderProfile() {

      const formik = useFormik({
        initialValues: {
          email: 'sajtel123@gmail.com',
          password: 'abcdef',
          school_location: '8888 University Drive SFU',
          departure_location: ' 7758 10th Ave',
        },

        onSubmit: values => {
          console.log('Form values',values)
        }

      })

  return (
    

  <> 
    <NavigationBar/>
    <div className = {styles.title}>
      <h1>Your Profile</h1>
    </div>

      <main className = {styles.main}>

        <p>  
          <Image src= "/4333097.jpg" alt="4333097.jpg" width={400} height ={400} align="center"/>
          
        </p>    
      <form  id = "myform" className= {styles.grid} onSubmit = {formik.handleSubmit}>
          <span>
          <div className = {styles.card}>
          <label htmlFor='email'>E-mail </label>
          <input className = {styles.card} type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
          </div>  

          <div className = {styles.card}>
          <label htmlFor='text'>Password</label>
          <input className = {styles.card} type='text' id='text' name='password' onChange = {formik.handleChange} value={formik.values.password}/>
          </div>
          </span>

          <span>
          <div className = {styles.card}>
          <label htmlFor='text'>School_Location</label>
          <input className = {styles.card} type='text' id='text' name="Wchool_location" onChange = {formik.handleChange} value ={formik.values.school_location}/>
          </div>
          <div className = {styles.card}>
          <label htmlFor='text'>Departure_Location</label>
          <input className = {styles.card} type='text' id='text' name="departure_location" onChange = {formik.handleChange} value ={formik.values.departure_location}/>     
          </div>
          </span>

      </form>

          <p className = {styles.form_button}>
          <button form = "myform" className = {styles.container} type="submit" > Save </button>
          </p>
 
      </main>
  </>
  )

}