import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useFormik} from 'formik'
import NavigationBar from '../components/navbar';


export async function getServerSideProps() {
  const res = await fetch("http://localhost:5000/api/user")
  const data = await res.json();

  return { props: { schools: data } };
}


export default function Drivers({schools}) {
  console.log(schools)
  const formik = useFormik({

    initialValues: {
      date_of_ride: '',
      number_of_seats: 0,
      departure_location: '',
      school_location: ''
    },
    onSubmit: values => {
      console.log('Form data', values)
    },
    validate: values => {
      let errors = {}
      if (!values.date_of_ride){
        errors.date_of_ride = 'Required'
      }
      if (!values.number_of_seats){
        errors.number_of_seats = 'Required'
      }

    }

  })
  //console.log('Form data', formik.values)
  

  return (
    
    <>
      <NavigationBar/>
      <div className={styles.container}>
        <p>THIS PAGE WILL BE FOR POSTING</p>
      </div>
      <form className = {styles.drivers_form} onSubmit={formik.handleSubmit}>
        <label htmlFor='date_of_ride'>Date</label>
        <input type = 'text' id = 'date_of_ride' name = 'date_of_ride' onChange={formik.handleChange} value={formik.values.date_of_ride} placeholder='yyyy/mm/dd'></input>

        <label htmlFor="number_of_seats">Number of seats available</label>
        <input type= 'number' id = 'number_of_seats' name = 'number_of_seats' onChange={formik.handleChange} value={formik.values.number_of_seats}/>

        <label htmlFor='departure_location'>Departure_Location</label>
        <input type = 'text' id = 'departure_location' name = 'departure_location' onChange={formik.handleChange} value={formik.values.departure_location}/>
        
        <label htmlFor='school_location'>School_Location</label>
        <input type = 'text' id = 'school_location' name = 'school_location' onChange={formik.handleChange} value={formik.values.school_location}></input>

        <button type = 'submit'>Submit</button>
      </form>
      
    </>
  )
}