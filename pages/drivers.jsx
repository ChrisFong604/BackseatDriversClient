import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useFormik} from 'formik'
import NavigationBar from '../components/navbar';

/*
await fetch("http://localhost:5000/api/driver/create/${id}", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(values, null, 2),
            }).catch(console.error);
*/
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
     
      
      <form className = {styles.formtemplate} onSubmit={formik.handleSubmit}>
        <h1>Create Ride</h1>
        <ul>
          <li>
            <label htmlFor='date_of_ride' style={{fontSize: 20}}>Day of the Ride</label>
            <input type = 'text' id = 'date_of_ride' name = 'date_of_ride' onChange={formik.handleChange} value={formik.values.date_of_ride} placeholder='yyyy/mm/dd'/>
          </li>

          <li>
            <label htmlFor="number_of_seats" style={{fontSize: 20}}>Number of seats available</label>
            <input type= 'number' id = 'number_of_seats' name = 'number_of_seats' onChange={formik.handleChange} value={formik.values.number_of_seats}/>
          </li>
          
          <li>
            <label htmlFor='departure_location' style={{fontSize: 20}}>Location of Departure</label>
            <input type = 'text' id = 'departure_location' name = 'departure_location' onChange={formik.handleChange} value={formik.values.departure_location}/>
          </li>

          <li>
            <label htmlFor='school_location' style={{fontSize: 20}} >Location of school</label>
            <input type = 'text' id = 'school_location' name = 'school_location' onChange={formik.handleChange} value={formik.values.school_location}/>
          </li>

        </ul>
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <button type = 'submit' style={{align: "center"}} >Create</button>
        </div>
      </form>
      
    </>
  )
}