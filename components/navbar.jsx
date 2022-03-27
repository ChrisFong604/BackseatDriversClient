import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap/";

export default function NavigationBar() {
	return (
		<>
			<Navbar bg="dark" variant="dark">
				<Container>
					<Navbar.Brand href="/">
						{" "}
						<h2 style={{ marginLeft: -185 }}>Backseat Drivers</h2>
					</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link
							href="/create-ride"
							style={{ paddingLeft: 100, paddingRight: 100 }}
						>
							<h4>Create Ride</h4>
						</Nav.Link>
						<Nav.Link href="postings" style={{ marginLeft: 40 }}>
							<h4>Postings</h4>
						</Nav.Link>
						<Nav.Link href="/riderProfile" style={{ marginLeft: 900 }}>
							<h4>Profile</h4>
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</>
	);
}
