import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export const NavigationBar: React.FC = () => {
  return (
    <Navbar sticky="top" bg="light" variant="light">
      <Link to="/">
        <Navbar.Brand>Not UTS</Navbar.Brand>
      </Link>
      <Nav className="mr-auto">
        <Link to="/test" className="nav-link">
          Test
        </Link>
        <Link to="/test-2" className="nav-link">
          Test 2
        </Link>
        <Link to="/registration" className="nav-link">
          Sign Up
        </Link>
      </Nav>
    </Navbar>
  );
};
