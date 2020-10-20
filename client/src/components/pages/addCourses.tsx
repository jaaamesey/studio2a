import React, { useState } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
//import { MultiselectProps, Multiselect } from 'react-bootstrap-multiselect-ts';
import '../../res/css/addCourses.css';
// import {
//   MDBSelect,
//   MDBSelectInput,
//   MDBSelectOptions,
//   MDBSelectOption,
//  } from 'mdbreact';

export const AddCourses: React.FC = () => {
  return (
    <Form className="form-div-add">
      <h1>Add a course</h1>
      <Form.Row>
        <Form.Group as={Col} controlId="formGridName">
          <Form.Label>Course Name:</Form.Label>
          <Form.Control placeholder="Enter Course Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridFaculty">
          <Form.Label>Faculty:</Form.Label>
          <Form.Control as="select" placeholder="Select Faculty Name">
            <option>Arts and Social Sciences</option>
            <option>Business</option>
            <option>Design, Architecture and Building</option>
            <option>Engineering and IT</option>
            <option>Health</option>
            <option>Law</option>
            <option>Sciences</option>
            <option>Transdisciplinary Innovation</option>
            <option>Other</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridCode">
          <Form.Label>Course Code:</Form.Label>
          <Form.Control placeholder="Enter Course Code" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridATAR">
          <Form.Label>Lowest ATAR:</Form.Label>
          <Form.Control placeholder="Enter ATAR Value" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridDuration">
          <Form.Label>Duration:</Form.Label>
          <Form.Control as="select">
            <option>Duration in years</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6+</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridTags">
          <Form.Label>Assign Tags:</Form.Label>
          <Form.Control as="select" multiple>
            <option>Flexibility</option>
            <option>Motivation</option>
            <option>Communication</option>
            <option>Public Speaking</option>
            <option>Problem Solving</option>
            <option>Analytics</option>
            <option>Creativity</option>
            <option>Programming Skills</option>
            <option>Leadership</option>
            <option>Management</option>
            <option>Willingness to Learn</option>
            <option>Customer Service</option>
            <option>Attention to Detail</option>
            <option>Empathy</option>
            <option>Decision Making</option>
            <option>Organisation</option>
            <option>Time Management</option>
            <option>Teamwork</option>
            <option>Strategic Planning</option>
            <option>Public Speaking</option>
            <option>Critical Thinking</option>
            <option>Mathematics</option>
            <option>English</option>
            <option>Biology</option>
            <option>History</option>
            <option>Geography</option>
            <option>Law</option>
            <option>Economics</option>
            <option>Business</option>
            <option>Journalism</option>
          </Form.Control>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group>
          <Form.Label>Description:</Form.Label>
          <Form.Control as="textarea"></Form.Control>
        </Form.Group>
      </Form.Row>
      <Button className="form-div button" variant="primary" type="submit">
        Add Course
      </Button>
    </Form>
  );
};
