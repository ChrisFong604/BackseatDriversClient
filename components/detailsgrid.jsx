import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Grid3x3Sharp, Container,} from 'react-bootstrap/'



export default function Grid3x3Sharp() {
  

  return (
    
    <>
        <Grid3x3Sharp bg="dark" variant="dark">
            <Container>
                <div class="row"></div>

            
            </Container>
        </Grid3x3Sharp>
        
    </>
  )
}