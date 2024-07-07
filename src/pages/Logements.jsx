import React from 'react';
import Header from '../components/Header';
import Slider from '../components/Slider';
import Footer from '../components/Footer';


export default function Logements(id)  {
    
   

    return (
        <>
        <Header/>
        <Slider id={id}/>
        <Footer/>
        </>
    )
}