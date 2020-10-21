import React, { useState, useEffect } from 'react';
import '../../res/css/tables.css';
import { Button, Container, Col, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { TagsChosen } from './tagsChosen';
import { GetRecommendations } from '../../recommendations';

export const RecommendationList: React.FC = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => 
  { 
    GetRecommendations()
    .then((result) => {
      console.log(result);
      setCourses(result.data);
    }, () => {
      console.log("There was a problem retrieving the courses");
    })
  },[]);

  const recommendationsComponent = courses ? courses.map((course, index) => (
    <tr id={index+1} onClick={() => setSelectedCourse(course)}>
      <td>{index+1}</td>
      <td>{"C" + course.coursecode}</td>
      <td>{course.title}</td>
      <td>{course.faculty}</td>
      <td>{course.lowestatar}</td>
      <td>{course.duration + " years"}</td>
    </tr>
  )) : null;
  return (
    <div>
      <Container>
        <h2 className="table-title">
          <strong>Recommended courses</strong>
        </h2>
      </Container>

      <table className="content-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Course Code</th>
            <th>Title</th>
            <th>Faculty</th>
            <th>Lowest ATAR</th>
            <th>Duration (Full Time)</th>
          </tr>
        </thead>
        <tbody>
          {recommendationsComponent}
        </tbody>
      </table>

      <br/>
      <TagsChosen/>
      <br/>
      <br/>

      {(selectedCourse !== null) && <Container>
        <Modal show={true} onHide={() => setSelectedCourse(null)}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedCourse.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>Overview:</h5>
            <p>{selectedCourse.description}</p>
            <hr />
            <div className="link-course">
              <a
                href={"https://www.handbook.uts.edu.au/courses/c" + selectedCourse.coursecode + ".html"}
                target="_blank"
                rel="noreferrer"
              >
                Learn more
              </a>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-default"
              onClick={() => setSelectedCourse(null)}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>}
    </div>
  );
};
