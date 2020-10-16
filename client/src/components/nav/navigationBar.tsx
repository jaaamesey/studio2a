import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../res/css/nav.css';

export const NavigationBar: React.FC = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light" className="nav-bar">
      <Link to="/">
        <Navbar.Brand>Not UTS</Navbar.Brand>
      </Link>
      <Nav justify className="mr-auto">
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/tags" className="nav-link">
          Recommendation Tags
        </Link>
        <Link to="/viewCourses" className="nav-link">
          View Courses
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/registration" className="nav-link">
          Sign up
        </Link>
        <Link to="/contactUs" className="nav-link">
          Contact Us
        </Link>
        <Link to="/admindashboard" className="nav-link">
          Admin
        </Link>
      </Nav>
    </Navbar>
  );
};
