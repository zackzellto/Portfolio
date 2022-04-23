import React from 'react';
import { Button } from 'react-bootstrap';
import { Form } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <>
    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label><u>Name</u></Form.Label>
            <Form.Control id='email-form-name' type="text" placeholder="Enter name" />
            <Form.Label><u>Email address</u></Form.Label>
            <Form.Control id='email-form-email' type="email" placeholder="Enter email" />
            <Form.Label><u>Subject</u></Form.Label>
            <Form.Control id='email-form-subject' type="text" placeholder="Enter subject" />
            <Form.Label><u>Message</u></Form.Label>
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
