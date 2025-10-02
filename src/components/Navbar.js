import React from 'react';
import logo from '../assets/logo.jpg'; // import your logo

const Navbar = () => {
  return (
    <nav style={{display: 'flex', justifyContent: 'space-between', alignItems:'center', padding: '1rem', background: '#1a1a1a', color: '#fff'}}>
      <div style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="ApexFlow Logo" style={{height:'40px', marginRight:'10px'}} />
        <h2>ApexFlow</h2>
      </div>
      <div>
        <a href="#home" style={{margin: '0 1rem', color:'#fff'}}>Home</a>
        <a href="#about" style={{margin: '0 1rem', color:'#fff'}}>About</a>
        <a href="#services" style={{margin: '0 1rem', color:'#fff'}}>Services</a>
        <a href="#contact" style={{margin: '0 1rem', color:'#fff'}}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
