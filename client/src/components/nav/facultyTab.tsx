import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import '../../res/css/viewCourses.css';
import '../../res/css/tables.css';

export const FacultyTab: React.FC = (props) => {
  return (
    <div>
      <Row className="tab-title">
        <h4>FACULTIES</h4>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses" className="tab-link">
          All Faculties
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/arts-and-social-sciences" className="tab-link">
          Arts and Social Sciences
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/business" className="tab-link">
          Business
        </a>
      </Row>
      <Row className="tab-faculty">
        {' '}
        <a id={3} href="/viewCourses/design-architecture-building" className="tab-link">
          Design, Architecture and Building
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/engineering-and-it" className="tab-link">
          Engineering and IT
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/health" className="tab-link">
          Health
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/law" className="tab-link">
          Law
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/sciences" className="tab-link">
          Sciences
        </a>
      </Row>
      <Row className="tab-faculty">
        <a href="/viewCourses/transdisciplinary-innovation" className="tab-link">
          Transdisciplinary Innovation
        </a>
      </Row>
    </div>
  );
};
