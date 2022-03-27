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

/*
  host_name?: string;
  phone_number?: string;
  email?: string;
  description?: string;
  date_of_ride: string;
  number_of_seats: number;
  departure_location: string;
  school_location: string;

*/
export default function Drivers({schools}) {
  console.log(schools)
  const formik = useFormik({

    initialValues: {
      date_of_ride: '',
      number_of_seats: '',
      departure_location: '',
      school_location: '',
      host_name: '',
      phone_number: '',
      email: '',
      description: '',
    },
    onSubmit: values => {
      console.log('Form data', values)
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
            <label htmlFor='host_name' style={{fontSize: 30}}>Name of Driver</label>
            <input type = 'text' id = 'host_name' name = 'host_name' onChange={formik.handleChange} value={formik.values.host_name} placeholder='Your Name'/>
          </li>
          <li>
            <label htmlFor='phone_number' style={{fontSize: 30}}>Cellphone Number</label>
            <input type = 'text' id = 'phone_number' name = 'phone_number' onChange={formik.handleChange} value={formik.values.phone_number}/>
          </li>
          <li>
            <label htmlFor='email' style={{fontSize: 30}}>School Associated Email</label>
            <input type = 'text' id = 'email' name = 'email' onChange={formik.handleChange} value={formik.values.email}/>
          </li>
          <li>
            <label htmlFor='description' style={{fontSize: 30}}>Description About Schedule</label>
            <input type = 'text' id = 'description' name = 'description' onChange={formik.handleChange} value={formik.values.description}/>
          </li>
          <li>
            <label htmlFor='date_of_ride' style={{fontSize: 30}}>Day of the Ride</label>
            <input type = 'text' id = 'date_of_ride' name = 'date_of_ride' onChange={formik.handleChange} value={formik.values.date_of_ride} placeholder='yyyy/mm/dd'/>
          </li>

          <label className ={styles.card}>
            <label htmlFor="number_of_seats" style={{fontSize: 30}}>Number of seats available</label>
            <input type= 'number' id = 'number_of_seats' name = 'number_of_seats' onChange={formik.handleChange} value={formik.values.number_of_seats}/>
          </label>
          
          <label className ={styles.card}>
            <label htmlFor='departure_location' style={{fontSize: 30}}>Location of Departure</label>
            <input type = 'text' id = 'departure_location' name = 'departure_location' onChange={formik.handleChange} value={formik.values.departure_location}/>
          </label>

          <label className = {styles.card}>
            <label htmlFor='school_location' style={{fontSize: 30}} >Location of school</label>
            <input type = 'text' id = 'school_location' name = 'school_location' onChange={formik.handleChange} value={formik.values.school_location}/>
          </label>

          <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <button type = 'submit' style={{align: "center"}} >Create</button>
          </div>
        </ul>
      </form>
      
    </>
  )
}