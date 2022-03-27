import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavigationBar from '../components/navbar';
import { useFormik } from 'formik' 



export default function RiderProfile() {

      const formik = useFormik({
        initialValues: {
          email: '',
          password: '',
          school_location: '',
          departure_location: '',
        },

        onSubmit: values => {
          console.log('Form values',values)
        }

      })

  return (
    

  <> 
    <NavigationBar/>
    <div className = {styles.title}>
      <h1>Edit your Profile</h1>
    </div>



      <main className = {styles.main}>

        <p>  
          <Image src= "/4333097.jpg" alt="4333097.jpg" width={400} height ={400} align="center"/>
          
        </p>    
      <form className = {styles.grid} onSubmit = {formik.handleSubmit}>
          <span className = {styles.card}>
          <label htmlFor='email'>E-mail </label>
          <input className = {styles.card} type='text' id='email' name='email' onChange={formik.handleChange} value={formik.values.email}/>
          </span>  

          <span className = {styles.card}>
          <label htmlFor='text'>Password</label>
          <input className = {styles.card} type='text' id='text' name='password' onChange = {formik.handleChange} value={formik.values.password}/>
          </span>

          <span className = {styles.card}>
          <label htmlFor='text'>school_location</label>
          <input className = {styles.card} type='text' id='text' name="school_location" onChange = {formik.handleChange} value ={formik.values.school_location}/>
          </span>

          <span className = {styles.card}>
          <label htmlFor='text'>departure_location</label>
          <input className = {styles.card} type='text' id='text' name="departure_location" onChange = {formik.handleChange} value ={formik.values.departure_location}/>     
          </span>
          
          <div>
              <button className = {styles.card} type="submit"> Save </button>
          </div>
          

      </form>

      
 
      </main>
  </>
  )

}