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
              <Button className="btn btn-default tag-btn">Management</Button>
              <Button className="btn btn-default tag-btn">Management</Button>
              <Button className="btn btn-default tag-btn">Management</Button>
              <Button className="btn btn-default tag-btn">Management</Button>
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
            <td>C09066</td>
            <td>Bachelor of Engineering (Honours)</td>
            <td>Engineering and IT</td>
            <td>Undergraduate</td>
            <td>4 years</td>
          </tr>
          <tr onClick={handleShowModalTwo}>
            <td>2</td>
            <td>C10026</td>
            <td>Bachelor of Business</td>
            <td>Business</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
          <tr onClick={handleShowModalThree}>
            <td>3</td>
            <td>C04143</td>
            <td>Master of Laws</td>
            <td>Law</td>
            <td>Postgraduate</td>
            <td>2 years</td>
          </tr>
          <tr onClick={handleShowModalFour}>
            <td>4</td>
            <td>C10143</td>
            <td>Bachelor of Information Technology</td>
            <td>Engineering and IT</td>
            <td>Undergraduate</td>
            <td>3 years</td>
          </tr>
          <tr onClick={handleShowModalFive}>
            <td>5</td>
            <td>C10242</td>
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
            <h5>Overiew:</h5>
            <p>
              This program is a comprehensive preparation for careers in the
              professional practice of engineering. Students learn to deal with
              complex systems and manage large-scale projects using the most
              appropriate emerging technologies.
            </p>
            <p>
              The course offers an authentic, professionally focused and
              practice-based education program with two sessions of internship
              (normally paid) in a real workplace setting. A number of the areas
              of study are available with explicit specialisations. For example,
              Civil Engineering is available with specialisations in Structures
              and Construction. Students can also focus on or broaden their
              studies by completing electives. By appropriate choice of
              electives, students can gain knowledge in a second engineering
              discipline, obtain a sub-major in a different field or study
              postgraduate-level subjects and apply for credit towards an
              engineering master degree. The concept has been strongly endorsed
              in wide-ranging industry consultations. Interaction between work
              experience and academic curriculum is very strong, giving the
              program a depth that no other full-time academic course can match.
            </p>
            <hr />
            <div className="link-course">
              <a
                href="https://www.handbook.uts.edu.au/courses/c09067.html"
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
            <h5>Overiew:</h5>
            <p>
              The Bachelor of Business offers students a sound background in all
              areas of business through eight common core subjects undertaken in
              first year, followed by in-depth knowledge in one or more chosen
              areas of interest through the completion of a mix of majors,
              extended majors, sub-majors and electives.
            </p>
            <p>
              Students have the flexibility to select a course structure and
              major(s) after first year. This means they have the opportunity to
              use Year 1 to explore all areas of business and ultimately guide
              their chosen specialisation in Year 2 and 3. Students choose from
              10 majors and 34 sub-majors, as well as four extended majors,
              giving them the flexibility to study a broad range of
              specialisations; or do an in-depth study of a specialisation of
              their choosing. In some degree configurations, students have the
              choice of four electives. This is an opportunity to deepen
              expertise with additional business subjects, or add breadth by
              enrolling in subjects from other university faculties.
            </p>
            <hr />
            <div className="link-course">
              <a
                href="https://handbook.uts.edu.au/courses/c10026.html"
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
            <h5>Overiew:</h5>
            <p>
              This course gives students the opportunity to build specialist
              legal skills in their area of professional practice, as well as
              theoretical and practical research capabilities as they relate to
              the study of the law.
            </p>
            <p>
              The degree is highly customisable – students pursue 48 credit
              points of study based on their personal or professional interests,
              choosing from a wide range of law electives (such as finance,
              patent, insurance, human rights, copyright, family, international
              and common law) and majors (corporate and commercial law, dispute
              resolution, and intellectual property). Course content is
              delivered by a mix of practising law professionals, full-time
              academic staff and international visiting academics, giving
              students access to a wide range of expertise and perspectives on
              the study and practice of law. Cross-institutional study in
              Australia and overseas is encouraged as part of this degree.
            </p>
            <hr />
            <div className="link-course">
              <a
                href="https://www.handbook.uts.edu.au/courses/c04143.html"
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
            <h5>Overiew:</h5>
            <p>
              This is a cooperative education scholarship program in computer
              information systems, developed by UTS in cooperation with a group
              of leading organisations. It differs from other cooperative
              education courses in that, during the industry-based sessions,
              students follow a structured program designed jointly by UTS and
              the employer group, including formal coursework delivered by
              industry.
            </p>
            <p>
              There are a limited number of places available in this course
              according to the number of industry sponsors each year. If
              selected for this course, students receive a total scholarship of
              around $49,500 for the duration of the course. This intensive
              course includes two six-month industry-based sessions with
              different industry sponsors. Industry sponsors are heavily
              involved in the curriculum design to ensure graduates are not only
              highly qualified but also have the knowledge and skills relevant
              to the needs of industry. Students normally secure graduate
              employment before completion of the course. Sponsors also actively
              recruit graduates from the course but students are not obliged to
              take up employment with a sponsor.
            </p>
            <hr />
            <div className="link-course">
              <a
                href="https://www.handbook.uts.edu.au/courses/c10143.html"
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
            <h5>Overiew:</h5>
            <p>
              The Bachelor of Science gives students a solid foundation in
              scientific knowledge and practice while allowing them to
              specialise in an area of interest. Students may follow any of the
              nine different majors leading to the award of a degree naming the
              chosen major, e.g. Bachelor of Science in Nanotechnology, or
              Bachelor of Science in Medical Science, or any of the majors
              available. Majors are chosen at the end of first year when
              students have experienced a range of disciplines and are more
              equipped to choose their preferred path. Students may also choose
              not to follow a major, but to select a range of second- and
              third-year subjects to tailor their study according to their
              interests and graduate with a cross-disciplinary degree.
            </p>
            <p>
              The flexibility of this course allows students to either
              specialise in a specific professional area or to develop skills
              and knowledge in a range of scientific disciplines. All majors aim
              to produce professional scientists with a thorough grounding in
              theory and highly adaptable and practical scientific, experimental
              and computational skills relevant to the discipline chosen.
            </p>
            <hr />
            <div className="link-course">
              <a
                href="https://www.handbook.uts.edu.au/courses/c10242.html"
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
