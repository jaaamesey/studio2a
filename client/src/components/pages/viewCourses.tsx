import React, { useState, useEffect } from 'react';
import '../../res/css/viewCourses.css';
import '../../res/css/tables.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ViewCourseList } from './viewCourseList';
import { Container, Col, Row } from 'react-bootstrap';
import { FacultyTab } from '../nav';

export const ViewCourses: React.FC = () => {
  const [path, setPath] = React.useState('http://localhost:8080/viewCourses');
  return (
    <div>
      <Container fluid>
        <Router>
          <Row>
            <Col sm={3} className="tab-faculty-panel">
              <FacultyTab/>
            </Col>
            <Col sm={9}>
              <ViewCourseList/>
            </Col>
          </Row>{' '}
        </Router>
      </Container>
    </div>
  );
};
