import React from 'react'
import emailjs from 'emailjs-com';

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs.sendForm(
      'default_service', 
      'template_utw0he3', 
      e.target, 
      'user_dAjPVATWyM5Go2hiUBidl')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }
  return (
    <div className='cards-cont'  style={{overflow: 'scroll'}}>
    <h2 className='MAIN-HEADING'>CONTACT</h2>
      <form onSubmit={sendEmail} style={{
        backgroundColor: '#FF8578',
        borderRadius: '10px',
        padding: '1em',
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
        margin: '0 auto'
      }} className='form'>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '1EM'}}>
        <label htmlfor='name' style={{color: '#fff',fontSize: '1.5EM'}}>Name</label>
        <input id='name' name='name' style={{
          outline: 'NONE',
          borderRadius: '5PX',
          border: 'NONE',
          padding: '0.8EM'
        }}></input>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', marginBottom: '1EM'}}>
        <label htmlfor='message' style={{color: '#fff',fontSize: '1.5EM'}}>Message</label>
        <input id='message' name='message' style={{
          outline: 'NONE',
          borderRadius: '5PX',
          border: 'NONE',
          padding: '0.8EM'
        }}></input>
        </div>
        <button type='submit' style={{
          display: 'inline-block',
          cursor: 'pointer',
          width: '100px',
          outline: 'none',
          border: 'none',
          backgroundColor: '#FFF',
          padding: '0.5EM',
          borderRadius: '5PX',
          color: '#FF8578',
          fontWeight: '650'
        }}>Submit</button>
      </form>
  </div>
  )
}

export default Contact
