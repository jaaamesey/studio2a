import React from 'react';
import { Link } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import '../../res/css/viewCourses.css';
import '../../res/css/tables.css';

export const FacultyTab: React.FC = () => {
  return (
    <div>
      <Row className="tab-title">
        <h4>FACULTIES</h4>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/arts-and-social-sciences" className="tab-link">
          Arts and Social Sciences
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/business" className="tab-link">
          Business
        </Link>
      </Row>
      <Row className="tab-faculty">
        {' '}
        <Link
          to="/viewCourses/design-architecture-building"
          className="tab-link"
        >
          Design, Architecture and Building
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/engineering-and-it" className="tab-link">
          Engineering and IT
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/health" className="tab-link">
          Health
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/law" className="tab-link">
          Law
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/sciences" className="tab-link">
          Sciences
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link to="/viewCourses/graduate-school-of-health" className="tab-link">
          Graduate School of Health
        </Link>
      </Row>
      <Row className="tab-faculty">
        <Link
          to="/viewCourses/transdisciplinary-innovation"
          className="tab-link"
        >
          Transdisciplinary Innovation
        </Link>
      </Row>
    </div>
  );
};
