import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Link from "next/link";
import React, {useState, useEffect} from 'react';
import NavigationBar from '../../components/navbar';

export async function getServerSideProps() {
    const res = await fetch("http://localhost:5000/api/rides/all")
    const data = await res.json();
    console.log(data)
    return { props: { rides: data } };
}

/*
export function Testing(props) {

    //console.log("this is schools2" , props)
    const router = useRouter();


    const { rideID, setRideID } = useState('');
    
    

    //console.log("this is rideID: " + rideID)

    if (rideID) {
        //console.log("RETURNING RIDEID")
        return (
            <div>
                <h1>{rideID.school_location}</h1>
            </div>
        );
    }
    //console.log("RETURNING NULL")
    return null;
    
}
    
*/

export default function Drivers({rides}) {
    
    console.log("this is rides", rides)
    //console.log(schools[0].address)
    const router = useRouter();

    

    
    const a = router.query
    console.log(a)
    console.log(a['rideId'])
    let seats = 0;
    let sloc = 0;
    let desc;
    let start;
    let dest;
    let phone;
    let email;
    for (let i = 0; i < rides.length; i++){
        if (a['rideId'] == rides[i].ride_id){
            
            seats = rides[i].number_of_seats
            sloc = rides[i].school_location
            desc = rides[i].description
            start = rides[i].departure_location
            dest = rides[i].school_location
            phone = rides[i].phone_number
            email = rides[i].email
        }
    }
    
    return (
      
      <>
        <NavigationBar/>
        <p>There are this number of seats on the ride: {seats}</p>
        <p>Here is the school location: {sloc} </p>
        <p>{desc}</p>
        <iframe
            width="450"
            height="250"                                       
            src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDXYIKlauR9teuVU4RHWACY6T1x_fPbZFY
            &origin= ${start}
            &destination= ${dest}`}                       
            >
        </iframe>

        <p>Contact using phone {phone}, or email {email}</p>

        
            
            
       
            
        
        
      </>
    )
  }