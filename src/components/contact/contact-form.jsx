import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <>
    <Form>
        <Form.Group controlId="formBasicEmail">
            
            <Form.Control id='email-form-name' type="text" placeholder="Enter name" />
            
            <Form.Control id='email-form-email' type="email" placeholder="Enter email" />
            
            <Form.Control id='email-form-subject' type="text" placeholder="Enter subject" />
            
            <Form.Control id='email-form-message' as="textarea" placeholder='Enter message' rows="10" />
            <div>
            <Button id='email-form-button'>Send me an email!</Button></div>
            <Form.Text id='email-text-muted' className="text-muted">
                I'll never share your email with anyone else.
            </Form.Text>
            
        </Form.Group>
    </Form>
    </>
  );
}
