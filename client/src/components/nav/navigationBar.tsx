import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../res/css/nav.css';

export const NavigationBar: React.FC = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand>Not UTS</Navbar.Brand>
      </Link>
      <Nav justify className="mr-auto">
        <Link to="/test" className="nav-link">
          Home
        </Link>
        <Link to="/test-2" className="nav-link">
          Recommend Courses
        </Link>
        <Link to="/tags" className="nav-link">
          Recommendation Tags
        </Link>
        <Link to="/registration" className="nav-link">
          Sign Up
        </Link>
        <Link to="/test-2" className="nav-link">
          View Courses
        </Link>
        <Link to="/login" className="nav-link">
          Login
        </Link>
        <Link to="/registration" className="nav-link">
          Sign up
        </Link>
        <Link to="/test-2" className="nav-link">
          Contact Us
        </Link>
        <Link to="/recommendationlist" className="nav-link">
          Recommendation List (Test)
        </Link>
      </Nav>
    </Navbar>
  );
};
