import React, { useState } from 'react';
import '../../res/css/tables.css';
import { Button, Container, Col, Modal, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export const RecommendationList: React.FC = () => {
  const [modalState, setModalState] = useState<
    | 'modal-one'
    | 'modal-two'
    | 'modal-three'
    | 'modal-four'
    | 'modal-five'
    | 'close'
  >('close');

  const handleShowModalOne = () => setModalState('modal-one');
  const handleShowModalTwo = () => setModalState('modal-two');
  const handleShowModalThree = () => setModalState('modal-three');
  const handleShowModalFour = () => setModalState('modal-four');
  const handleShowModalFive = () => setModalState('modal-five');

  const handleClose = () => setModalState('close');

  return (
    <div>
      <button className="back-button">
        {' '}
        <FontAwesomeIcon icon={faChevronLeft} size="2x" />
      </button>

      <Container>
        <Row>
          <Col sm={2} className="tag-title">
            <h4>Tags chosen:</h4>
          </Col>
          <Col sm={9} className="tag-panel">
            <Row>
              <Button className="btn btn-primary tag-btn">
                Problem Solving
              </Button>
              <Button className="btn btn-default tag-btn">Leadership</Button>
              <Button className="btn btn-default tag-btn">Creativity</Button>
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
          <tr>
            <th>#</th>
            <th>Course Code</th>
            <th>Title</th>
            <th>Faculty</th>
            <th>Study Level</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleShowModalOne}>
            <td>1</td>
            <td>C12345</td>
            <td>Bachelor of Engineering (Honours)</td>
            <td>Engineering and IT</td>
            <td>Undergraduate</td>
            <td>4 years</td>
          </tr>
          <tr onClick={handleShowModalTwo}>
            <td>2</td>
            <td>C54321</td>
            <td>Bachelor of Commerce</td>
            <td>Business School</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
          <tr onClick={handleShowModalThree}>
            <td>3</td>
            <td>C23564</td>
            <td>Master of Law</td>
            <td>Law</td>
            <td>Postgraduate</td>
            <td>2 years</td>
          </tr>
          <tr onClick={handleShowModalFour}>
            <td>4</td>
            <td>C23165</td>
            <td>Bachelor of Information Technology</td>
            <td>Engineering and IT</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
          <tr onClick={handleShowModalFive}>
            <td>5</td>
            <td>C25365</td>
            <td>Bachelor of Science</td>
            <td>Science</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
        </tbody>
      </table>

      <Container>
        <Modal show={modalState === 'modal-one'} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bachelor of Engineering (Honours)</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-default"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={modalState === 'modal-two'} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bachelor of Commerce</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-default"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={modalState === 'modal-three'} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Master of Law</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-default"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={modalState === 'modal-four'} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bachelor of Information Technology</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-default"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={modalState === 'modal-five'} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Bachelor of Science</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              className="btn btn-default"
              onClick={handleClose}
            >
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};
