//import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React, {useState, useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion'

import NavigationBar from '../components/navbar';
import Link from 'next/link';

const dummy = [
    {date_of_ride: '2022/09/12', number_of_seats: 2, departure_location: 'V7C2X4', school_location: 'V5A1S6', ride_id: '5'},
    {date_of_ride: '2024/01/16', number_of_seats: 4, departure_location: 'V3J7Y5', school_location: 'V5A1S6', ride_id: '6'},
    {date_of_ride: '2022/04/23', number_of_seats: 1, departure_location: 'V3J7Y5', school_location: 'V5A1S6', ride_id: '9'},
]

function AllPosting({dummydata}){
    return (
        <>
            <NavigationBar/>
            {dummydata.map(xd => 
            (
                <div key = {xd.date_of_ride}>
                    <p>{xd.date_of_ride}</p>
                    <p>{xd.number_of_seats}</p>
                    
                    <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>View Route</Accordion.Header>
                            <Accordion.Body>
                            <iframe
                                width="450"
                                height="250"
                                
                                
                                src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDXYIKlauR9teuVU4RHWACY6T1x_fPbZFY
                                &origin= ${xd.departure_location}
                                &destination= ${xd.school_location}`}
                                
                            >
                            </iframe>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                    <Link href = {'/rideDetails/' + xd.ride_id} as = {"rideDetails/" + xd.ride_id}>
                        <button>View ride</button>
                    </Link>
                    <br></br>
                </div>
            )    
            )}
        </>
    )

}

export default function Postings() {
    
    const [origin, setOrigin] = useState('V7C2X4')
    const [destination, setDestination] = useState('SFU+Burnaby')
    return (
    
        <div className={styles.container}>
        <AllPosting dummydata = {dummy}/>
        
        </div>
  )
}