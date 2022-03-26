import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useFormik} from 'formik'

export default function Drivers() {
  
  const formik = useFormik({

    initialValues: {
      date_of_ride: '',
      number_of_seats: 0,
      departure_location: '',
      school_location: ''
    },
    onSubmit: values => {
      console.log('Form data', values)
    }

  })
  //console.log('Form data', formik.values)
  

  return (
    <>
      <div className={styles.container}>
        <p>THIS PAGE WILL BE FOR POSTING</p>
      </div>
      <form className = {styles.drivers_form} onSubmit={formik.handleSubmit}>
        <label htmlFor='date_of_ride'>Date</label>
        <input type = 'text' id = 'date_of_ride' name = 'date_of_ride' onChange={formik.handleChange} value={formik.values.date_of_ride}></input>

        <label htmlFor="number_of_seats">Number of seats available</label>
        <input type= 'number' id = 'number_of_seats' name = 'number_of_seats' onChange={formik.handleChange} value={formik.values.number_of_seats}/>

        <label htmlFor='departure_location'>Location of Departure</label>
        <input type = 'text' id = 'departure_location' name = 'departure_location' onChange={formik.handleChange} value={formik.values.departure_location}/>
        
        <label htmlFor='school_location'>Date</label>
        <input type = 'text' id = 'school_location' name = 'school_location' onChange={formik.handleChange} value={formik.values.school_location} placeholder='yyyy/mm/dd'></input>

        <button type = 'submit'>Submit</button>
      </form>
      
    </>
  )
}