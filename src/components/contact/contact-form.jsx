import React from 'react';
import { Form } from 'react-bootstrap';

export default function ContactForm() {
  return (
    <>
    <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter name" />
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Enter subject" />
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows="3" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
        </Form.Group>
    </Form>
    </>
  );
}
