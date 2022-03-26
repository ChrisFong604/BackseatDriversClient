import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navbar';
import react from 'react'
import { useFormik } from 'formik';

export default function RiderProfile() {
  

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
        },

        onSubmit: values => {
          console.log('Form values',values)
        }

      })

      console.log('form values',formik.values);

        
  return (
    
  <>  
    <NavigationBar/>


    <div className = {styles.container} onSubmit = {formik.handleSubmit}>
      <p>Edit your Profile</p>
    </div>

      <form className = {styles.RiderProfile}>

          <label htmlFor='email'>E-mail</label>
          <input type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>

          <label htmlFor='text'>Password</label>
          <input type='text' id='text' name='password' onChange = {formik.handleChange} value={formik.values.password}/>



          <input type='submit'></input>
          
      </form>

  </>
  )

}