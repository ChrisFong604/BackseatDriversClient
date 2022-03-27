import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router"
import Link from "next/link";
import React, {useState, useEffect} from 'react';


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

    

    if (router.query['rideId'] == 5){
        console.log("ROUTER.QUERY!!")
    }
    const a = router.query
    console.log(a)
    console.log(a['rideId'])
    let b = 0;
    let c = 0;
    for (let i = 0; i < rides.length; i++){
        if (a['rideId'] == rides[i].ride_id){
            console.log("HOOORAY")
            b = rides[i].number_of_seats
            c = rides[i].school_location
        }
    }
    
    return (
      
      <>
        <p>There are this number of seats on the ride: {b}</p>
        <p>Here is the school location: {c} </p>
        
            
        
        
      </>
    )
  }