import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useFormik } from "formik";
import NavigationBar from "../components/navbar";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/dist/server/web/spec-extension/response";

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
	const res = await fetch("http://localhost:5000/api/user");
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
export default function CreateRide({ schools }) {
	const formik = useFormik({
		initialValues: {
			date_of_ride: "",
			number_of_seats: "",
			departure_location: "",
			school_location: "",
			host_name: "",
			phone_number: "",
			email: "",
			description: "",
		},
		onSubmit: async (values) => {
			await fetch("http://localhost:5000/api/rides/create", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(values, null, 2),
			})
				.catch(console.error)
				.then(NextResponse.redirect("/home"));
		},
	});

	return (
		<>
			<NavigationBar />

			<form className={styles.formtemplate} onSubmit={formik.handleSubmit}>
				<h1>Create Ride</h1>
				<ul className={styles.formInputs}>
					<li>
						<input
							type="text"
							id="host_name"
							name="host_name"
							onChange={formik.handleChange}
							value={formik.values.host_name}
							placeholder="name"
						/>
					</li>
					<li>
						<input
							type="text"
							id="phone_number"
							name="phone_number"
							onChange={formik.handleChange}
							value={formik.values.phone_number}
							placeholder="phone"
						/>
					</li>
					<li>
						<input
							type="text"
							id="email"
							name="email"
							onChange={formik.handleChange}
							value={formik.values.email}
							placeholder="school email"
						/>
					</li>
					<li>
						<input
							type="text"
							id="description"
							name="description"
							style={{ paddingBottom: 100, wordWrap: "break-word" }}
							onChange={formik.handleChange}
							value={formik.values.description}
							placeholder="description"
						/>
					</li>
					<li>
						<input
							type="date"
							id="date_of_ride"
							name="date_of_ride"
							onChange={formik.handleChange}
							value={formik.values.date_of_ride}
							placeholder="yyyy/mm/dd"
						/>
					</li>
					<li>
						<input
							type="number"
							id="number_of_seats"
							name="number_of_seats"
							onChange={formik.handleChange}
							value={formik.values.number_of_seats}
							placeholder="seats"
						/>
					</li>
					<li>
						<input
							type="text"
							id="departure_location"
							name="departure_location"
							onChange={formik.handleChange}
							value={formik.values.departure_location}
							placeholder="departure location"
						/>
					</li>

					<li>
						<input
							type="text"
							id="school_location"
							name="school_location"
							onChange={formik.handleChange}
							value={formik.values.school_location}
							placeholder="school location"
						/>
					</li>

					<div
						style={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						<button type="submit" style={{ align: "center" }}>
							Create
						</button>
					</div>
				</ul>
			</form>
		</>
	);
}
