import React from 'react';
import logo from '../assets/logo.jpg';

const Hero = () => {
  return (
    <section id="home" style={{
      textAlign: 'center',
      padding: '4rem 1rem',
      display: 'flex',
      flexDirection: 'colum
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem'
    }}>
      <img src={logo} alt="ApexFlow Logo" style={{
        height: '150px',
        maxWidth: '80%',
      }} />

      <h1 style={{margin: 0}}>Welcome to ApexFlow Technologies</h1>
      <p style={{margin: 0}}>Your solution for smart, efficient, and reliable technology services.</p>
      <button style={{padding:'0.5rem 1rem', marginTop:'1rem', fontSize:'1rem'}}>Get Started</button>
    </section>
  );
};

export default Hero;
