import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import NavigationBar from "../../components/navbar";

import styles from "../../styles/postings.module.css";

export async function getServerSideProps() {
	const res = await fetch("http://localhost:5000/api/rides/all");
	const data = await res.json();
	console.log(data);
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

export default function Drivers({ rides }) {
	console.log("this is rides", rides);
	//console.log(schools[0].address)
	const router = useRouter();

	const a = router.query;
	console.log(a);
	console.log(a["rideId"]);
	let name;
	let seats = 0;
	let sloc = 0;
	let desc;
	let start;
	let dest;
	let phone;
	let email;
	for (let i = 0; i < rides.length; i++) {
		if (a["rideId"] == rides[i].ride_id) {
			name = rides[i].host_name;
			seats = rides[i].number_of_seats;
			sloc = rides[i].school_location;
			desc = rides[i].description;
			start = rides[i].departure_location;
			dest = rides[i].school_location;
			phone = rides[i].phone_number;
			email = rides[i].email;
		}
	}

	return (
		<>
			<NavigationBar />
			<div className={styles.main_container}>
				<div className={styles.middle_column}>
					<h1 className={styles.host_name}>{name}'s Carpool</h1>
					<div className={styles.opposite_text}>
						<h4 className={styles.info}>{seats} available seats</h4>
						<h4 className={styles.info}>{sloc}</h4>
					</div>

					<h6 className={styles.description}>{desc}</h6>

					<h4 className={styles.contact_header}>Contact</h4>

					<div className={styles.opposite_text}>
						<h5>{phone}</h5>
						<h5>{email}</h5>
					</div>

					<iframe
						className={styles.map}
						width="810"
						height="450"
						src={`https://www.google.com/maps/embed/v1/directions?key=AIzaSyDXYIKlauR9teuVU4RHWACY6T1x_fPbZFY
            &origin= ${start}
            &destination= ${dest}`}
					></iframe>
				</div>
			</div>
		</>
	);
}
