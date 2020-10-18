import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../res/css/nav.css';

import LogoSVG from '../../res/img/uts-logo.svg';

export const NavigationBar: React.FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      sticky="top"
      bg="light"
      variant="light"
      className="nav-bar"
    >
      <Link to="/">
        <img src={LogoSVG} alt="Not UTS" />
      </Link>
      <Navbar.Toggle aria-controles="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
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
      </Navbar.Collapse>
    </Navbar>
  );
};
