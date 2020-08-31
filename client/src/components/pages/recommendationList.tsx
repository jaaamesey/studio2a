import React, { useState } from 'react';
//import '../../res/css/style.css';
import '../../res/css/tables.css';
import { Button, Container, Col, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export const RecommendationList: React.FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <div className="back-button">
        <Button className="btn">
          {' '}
          <FontAwesomeIcon icon={faArrowLeft} size="2x" />
        </Button>
      </div>

      <Container>
        <Row>
          <Col sm={2} className="non">
            <h4>Tags choosen:</h4>
          </Col>
          <Col sm={9} className="tag-panel">
            <Row>
              <Button className="btn btn-primary tag-btn">
                Problem Solving
              </Button>

              <Button className="btn btn-default tag-btn">Leadership</Button>

              <Button className="btn btn-default tag-btn">Management</Button>
              <Button className="btn btn-default tag-btn">Management</Button>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container>
        <h2 className="table-title">
          <strong>Course Recommendation:</strong>
        </h2>
      </Container>

      <table className="content-table">
        <thead>
          <tr onClick={handleShow}>
            <th>#</th>
            <th>Course Code</th>
            <th>Title</th>
            <th>Faculty</th>
            <th>Study Level</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>C12345</td>
            <td>Bachelor of Engineering (Honours)</td>
            <td>Engineering and IT</td>
            <td>Undergraduate</td>
            <td>4 years</td>
          </tr>
          <tr>
            <td>2</td>
            <td>C54321</td>
            <td>Bachelor of Commerce</td>
            <td>Business School</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>3</td>
            <td>C23564</td>
            <td>Master of Law</td>
            <td>Law</td>
            <td>Postgraduate</td>
            <td>2 years</td>
          </tr>
          <tr>
            <td>4</td>
            <td>C23165</td>
            <td>Bachelor of Information Technology</td>
            <td>Engineering and IT</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
          <tr>
            <td>5</td>
            <td>C25365</td>
            <td>Bachelor of Science</td>
            <td>Science</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
        </tbody>
      </table>

      <div>
        <Button
          variant="primary"
          className="btn btn-primary"
          onClick={handleShow}
        >
          Launch demo modal
        </Button>
      </div>

      <Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>Whoooo readung this text in a modal !</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};
