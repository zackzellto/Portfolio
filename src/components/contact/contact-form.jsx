import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useState } from 'react';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ContactForm() {

    const [toSend, setToSend] = useState({
    from_name: '',
    subject: '',
    message: '',
    reply_to: '',
  });

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    emailjs.send(
      'my_gmail_account',
      'template_q65yjwr',
      toSend,
      'GAWF3OFJcs0beqvWj'
    )
         .then(res => {
        if (res.status === 200){
          toast.success("Message sent successfully!");  
          console.log('SUCCESS!', res.status, res.text);   
          } else {
          toast.error("Message failed to send!");
          console.log('FAILED...', res.status, res.text);
          }});

      document.getElementById('email-form-name').value = '';
      document.getElementById('email-form-email').value = '';
      document.getElementById('email-form-subject').value = '';
      document.getElementById('email-form-message').value = '';
  };


  return (
    <>
<form onSubmit={onSubmit}>
  <input
    id='email-form-name'
    type='text'
    name='from_name'
    placeholder='Your name'
    value={toSend.from_name}
    onChange={handleChange}
  />  
  <input
    id='email-form-email'
    type='text'
    name='reply_to'
    placeholder='Your email'
    value={toSend.reply_to}
    onChange={handleChange}
  />
  <input
    id='email-form-subject'
    type='text'
    name='subject'
    placeholder='Subject'
    value={toSend.subject}
    onChange={handleChange}
  />
  <input
    id='email-form-message'
    type='text'
    name='message'
    placeholder='Your message'
    value={toSend.message}
    onChange={handleChange}
  />

  <Button id='email-form-button' type='submit'>Send me an email!</Button>
  <ToastContainer
  position="bottom-right"
  autoClose={4000}
  hideProgressBar={true}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover />

    <Form.Text id='email-text-muted' className="text-muted">
          I'll never share your email with anyone else.
      </Form.Text>
</form>
    </>
  );
}
