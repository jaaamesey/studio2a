import React, { useState, useEffect } from 'react';
import '../../res/css/viewCourses.css';
import '../../res/css/tables.css';
import { Container, Col, Row } from 'react-bootstrap';
import { getCourses } from '../../courses';

export const ViewCourseList: React.FC = () => {
  const [courses, setCourses] = React.useState([]);
  const [faculty, setFaculty] = React.useState('');
  const [facultyDescription, setFacultyDescription] = React.useState('');

  useEffect(() => 
  { 
    getCourses(getFaculty(window.location.href))
    .then((result) => {
      setCourses(result.courses);
      setFaculty(result.faculty);
      setFacultyDescription(result.facultyDescription);
      console.log(result);
    }, () => {
      console.log("There was a problem retrieving the courses");
    })
  },[]);

  const getFaculty = path => path.substring(path.lastIndexOf('/') + 1)

  const courseList = courses.map(c => (
      <li id={c.id}>
        <a
          href={"https://www.handbook.uts.edu.au/courses/c" + c.code + ".html"}
          target="_blank"
          rel="noreferrer"
        >
          {"C" + c.code}
        </a>
        {c.name}
      </li>
  ));
  return (
    <div>
      <Container className="faculty-courses">
        <div className="faculty-courses-head">
          <h2>{faculty}</h2>
          <p>
            {facultyDescription}
          </p>
        </div>
        <div className="faculty-courses-list">
          <h3>Undergraduate courses</h3>
          <ul>
            {courseList}
          </ul>
        </div>
      </Container>
    </div>
  );
};
