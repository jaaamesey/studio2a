import React from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import '../../res/css/contactUs.css';

export const ContactUs: React.FC = () => {
  return (
    <Form className="form-div-contact-us">
      <h1>Contact Us</h1>
      <h4>Fill out the form and we will get back to you shortly</h4>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group>
          <Form.Label>Email:</Form.Label>
          <Form.Control />
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridTags">
          <Form.Label>Query Type</Form.Label>
          <Form.Control as="select">
            <option>General enquiry</option>
            <option>Special enquiry</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group>
          <Form.Label>Message:</Form.Label>
          <Form.Control as="textarea"></Form.Control>
        </Form.Group>
      </Form.Row>
      <Button className="form-div button" variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
