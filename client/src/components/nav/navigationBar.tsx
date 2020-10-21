import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../res/css/nav.css';

import LogoSVG from '../../res/img/uts-logo.svg';

import { user, logout } from '../../user';

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
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav justify className="mr-auto">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/tags" className="nav-link">
            Select Tags
          </Link>
          <Link to="/recommendationlist" className="nav-link">
            See Recommendations
          </Link>
          <Link to="/viewCourses" className="nav-link">
            View Courses
          </Link>
          <Link to="/contactUs" className="nav-link">
            Contact Us
          </Link>
          {user?.type === 'ADMIN' && (
            <Link to="/admindashboard" className="nav-link">
              Admin
            </Link>
          )}
          {user?.type === 'TEACHER' && (
            <Link to="/addCourses" className="nav-link">
              Add Courses
            </Link>
          )}
          {user ? (
            <Link
              onClick={(e) => {
                e.preventDefault();
                logout();
              }}
              to={''}
              className="nav-link"
            >
              Logout ({user.username})
            </Link>
          ) : (
            <>
              <Link to="/registration" className="nav-link">
                Sign Up
              </Link>
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
