    import React, { useState } from 'react';

const Contact = () => {
  const [form, setForm] = useState({name:'', email:'', message:''});

  const handleChange = e => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert('Message submitted!'); // placeholder action
    setForm({name:'', email:'', message:''});
  };

  return (
    <section id="contact" style={{padding:'4rem 2rem'}}>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', maxWidth:'400px'}}>
        <input name="name" value={form.name} onChange={handleChange} placeholder="Your Name" style={{margin:'0.5rem 0', padding:'0.5rem'}}/>
        <input name="email" value={form.email} onChange={handleChange} placeholder="Your Email" style={{margin:'0.5rem 0', padding:'0.5rem'}}/>
        <textarea name="message" value={form.message} onChange={handleChange} placeholder="Message" style={{margin:'0.5rem 0', padding:'0.5rem'}}/>
        <button type="submit" style={{padding:'0.5rem', marginTop:'1rem'}}>Send</button>
      </form>
    </section>
  );
};

export default Contact;
