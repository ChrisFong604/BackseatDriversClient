import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navbar, Container, Nav} from 'react-bootstrap/'



export default function NavigationBar() {
  

  return (
    
    <>
        <Navbar bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/">Backseat Drivers</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href="/drivers" style = {{marginLeft: 20}}>Drivers</Nav.Link>
            <Nav.Link href="/riderProfile">Profile</Nav.Link>
            <Nav.Link href="postings">Postings</Nav.Link>
            </Nav>
            </Container>
        </Navbar>
        
    </>
  )
}