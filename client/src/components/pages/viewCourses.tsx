import React from 'react';
import '../../res/css/viewCourses.css';
import '../../res/css/tables.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Col, Row } from 'react-bootstrap';
import { FacultyTab } from '../nav';

export const ViewCourses: React.FC = () => {
  return (
    <div>
      <Container fluid>
        <Router>
          <Row>awdwec</Row>
          <Row>
            <Col sm={3} className="tab-faculty-panel">
              <FacultyTab />
            </Col>
            <Col sm={9}>
              <Switch>
                <Route path="/viewCourses/arts-and-social-sciences">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Art and Social Sciences</h2>
                      <p>
                        The Faculty of Arts and Social Sciences (FASS) leads
                        positive global change and advances social justice
                        through our teaching, research and collaboration with
                        industry and the community.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>
                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li>Doctor of Philosophy</li>
                        <li>Master of Arts (research)</li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/business">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Business</h2>
                      <p>
                        Advancing knowledge with impact through integrative
                        thinking for next generation leaders in a globalising
                        world.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>Bachelor of Accounting</li>
                        <li>Bachelor of Accounting (Honours)</li>
                        <li> Bachelor of Business</li>
                        <li>Bachelor of Business (Honours)</li>
                        <li>Bachelor of Business Administration</li>
                        <li>Bachelor of Economics</li>
                        <li>Bachelor of Entrepreneurship (Honours)</li>
                        <li>Bachelor of Management (Honours)</li>
                      </ul>
                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li>Doctor of Philosophy</li>
                        <li>Master of Business (Research)</li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li>Master of Business Administration</li>
                        <li>Master of Finance</li>
                        <li>MAster of Human Resource Management</li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/design-architecture-building">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Design, Architecture and Building</h2>
                      <p>
                        The UTS Faculty of Design, Architecture and Building
                        contributes to the transformation of urban life,
                        contemporary design culture and the built environment
                        through our research, education and engagement with the
                        professions.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/engineering-and-it">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Engineering and IT</h2>
                      <p>
                        Delivering rigorous, practical and industry-focused
                        education and research that encourages disruptive
                        technologies and cultivates exceptional engineering and
                        information technology professionals.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/health">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Health</h2>
                      <p>
                        Innovative, practice-oriented and globally relevant
                        education and research in a broad range of health
                        disciplines.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/law">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Law</h2>
                      <p>
                        A dynamic and innovative law school, achieving great
                        success for the quality of its legal education and
                        research.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/sciences">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Sciences</h2>
                      <p>
                        UTS Science is research-driven, relevant, innovative and
                        practical, achieving success and impact for its quality
                        teaching and research.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/graduate-school-of-health">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Graduate School of Health</h2>
                      <p>
                        We specialise in innovative and practice-based Graduate
                        Entry Masters programs in pharmacy, speech pathology,
                        orthoptics, physiotherapy, genetic counselling and
                        clinical psychology. Our professional partnerships,
                        expert staff and world-class facilities are the
                        foundational pillars which drive us to be innovators in
                        the health profession.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
                <Route path="/viewCourses/transdisciplinary-innovation">
                  <Container className="faculty-courses">
                    <div className="faculty-courses-head">
                      <h2>Transdisciplinary Innovation</h2>
                      <p>
                        Transdisciplinary research and teaching draws on
                        multiple disciplines to provide the knowledge base to
                        address complex problems in society.
                      </p>
                    </div>
                    <div className="faculty-courses-list">
                      <h3>Undergraduate courses</h3>
                      <ul>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10276.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10276
                          </a>
                          Bachelor of Music and Sounds Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09047.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09047
                          </a>
                          Bachelor of Communication (Honours)
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10361.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10361
                          </a>
                          Bachelor of Communication (Journalism)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10362.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10362
                          </a>
                          Bachelor of Communication (Media Arts and Production)
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10363.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10363
                          </a>
                          Bachelor of Communication (Public Communication)
                        </li>
                        <li>
                          <a
                            href="https://www.handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10364
                          </a>
                          Bachelor of Communication (Social and Political
                          Sciences)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10369.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10369
                          </a>
                          Bachelor of Communication (Creative Writing)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10371.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10371
                          </a>
                          Bachelor of Communication (Digital and Social Media)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10264.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10264
                          </a>
                          Bachelor of Global Studies
                        </li>
                      </ul>

                      <h3>Postgraduate courses</h3>
                      <h4>Research degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                      <h4>Coursework degrees</h4>
                      <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                      </ul>
                    </div>
                  </Container>
                </Route>
              </Switch>
            </Col>
          </Row>{' '}
        </Router>
      </Container>
    </div>
  );
};
