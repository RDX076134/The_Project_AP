import React from 'react';
import herobg from './Assets/Herobg.svg';
import './App.css';

export default function Landingpage() {
    return (
        <div className="LandingPage container-fluid">
            <img alt="HeroBG" className="Herobg" src={herobg} />
                <h1 className='Title text-secondary fw-normal'>The Project N</h1>
                <h1 className='date fw-normal'>22nd Dec 2021</h1>
                <div className='dynamic-text text-center'>
                    <div className='line'><div className='line1'>Hey There!</div></div>
                    <div className='line'><div className='line2'>Hola!</div></div>
                    <div className='line'><div className='line3'>namaste!</div></div>
                    <div className='line'><div className='line4'>bonjour!</div></div>
                    <div className='line'><div className='line5'>hi nishi!</div></div>
            </div>
        </div>
    )
}
