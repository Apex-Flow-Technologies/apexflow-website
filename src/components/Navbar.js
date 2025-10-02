import React, { useState } from 'react';
import logo from '../assets/logo.jpg';

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '1rem',
      background: '#1a1a1a',
      color: '#fff',
      flexWrap: 'wrap'
    }}>
      <div style={{display:'flex', alignItems:'center'}}>
        <img src={logo} alt="ApexFlow Logo" style={{height:'40px', marginRight:'10px'}} />
        <h2 style={{margin: 0}}>ApexFlow</h2>
      </div>

      <div onClick={()=>setOpen(!open)} style={{cursor: 'pointer'}}>
        <div style={{width:'25px', height:'3px', background:'#fff', margin:'5px 0'}}></div>
        <div style={{width:'25px', height:'3px', background:'#fff', margin:'5px 0'}}></div>
        <div style={{width:'25px', height:'3px', background:'#fff', margin:'5px 0'}}></div>
      </div>

      <div style={{
        display: 'flex',
        flexDirection: open ? 'column' : 'row',
        gap:'1rem',
        marginTop: open ? '1rem' : '0',
        width: open ? '100%' : 'auto',
        alignItems: 'center'
      }}>
        <a href="#home" style={{color:'#fff'}}>Home</a>
        <a href="#about" style={{color:'#fff'}}>About</a>
        <a href="#services" style={{color:'#fff'}}>Services</a>
        <a href="#contact" style={{color:'#fff'}}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
