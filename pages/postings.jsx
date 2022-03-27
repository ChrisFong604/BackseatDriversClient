//import Head from 'next/head'
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect } from "react";
import Accordion from "react-bootstrap/Accordion";

import NavigationBar from "../components/navbar";
import Link from "next/link";

export async function getServerSideProps() {
	const res = await fetch("http://localhost:5000/api/rides/all");
	const data = await res.json();
	console.log(data);
	return { props: { rides: data } };
}

function AllPosting({ dummydata }) {
	return (
		<>
			{dummydata.map((xd) => (
				<li key={xd.date_of_ride}>
					<div>
						<p> Departure Location: {xd.departure_location}</p>
						<p> Destination: {xd.school_location}</p>
						<p> Date of ride: {xd.date_of_ride}</p>
						<p> Number of seats: {xd.number_of_seats}</p>
						<p> Name of driver: {xd.host_name}</p>

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
									></iframe>
								</Accordion.Body>
							</Accordion.Item>
						</Accordion>
						<Link
							href={"/rideDetails/" + xd.ride_id}
							as={"rideDetails/" + xd.ride_id}
						>
							<button className={styles.postbutton}>View more</button>
						</Link>
						<br></br>
					</div>
				</li>
			))}
		</>
	);
}

export default function Postings({ rides }) {
	const [origin, setOrigin] = useState("V7C2X4");
	const [destination, setDestination] = useState("SFU+Burnaby");
	return (
		<>
			<NavigationBar />
			<ul className={styles.postingstemplate}>
				<AllPosting dummydata={rides} />
			</ul>
		</>
	);
}
