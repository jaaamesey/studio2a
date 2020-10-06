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
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10235.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10235
                          </a>
                          Bachelor of Accounting
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10026.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10026
                          </a>
                          Bachelor of Business
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10340.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10340
                          </a>
                          Bachelor of Business Administration
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10348.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10348
                          </a>
                          Bachelor of Economics
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09101.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09101
                          </a>
                          Bachelor of Entrepreneurship (Honours)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10342.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10342
                          </a>
                          Bachelor of Management
                        </li>
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
                            href="https://handbook.uts.edu.au/courses/c09079.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09079
                          </a>
                          Bachelor of Landscape Architecture (Honours)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10004.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10004
                          </a>
                          Bachelor of Design in Architecture
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10214.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10214
                          </a>
                          Bachelor of Construction Project Management
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10271.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10271
                          </a>
                          Bachelor of Design in Interior Architecture
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10273.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10273
                          </a>
                          Bachelor of Design in Animation
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10304.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10304
                          </a>
                          Bachelor of Design in Product Design
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10306.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10306
                          </a>
                          Bachelor of Design in Fashion and Textiles
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10308.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10308
                          </a>
                          Bachelor of Design in Visual Communication
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10310.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10310
                          </a>
                          Bachelor of Property Economics
                        </li>
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
                            href="https://handbook.uts.edu.au/courses/c09066.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09066
                          </a>
                          Bachelor of Engineering (Honours)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09067.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09067
                          </a>
                          Bachelor of Engineering (Honours) Diploma in
                          Professional Engineering Practice
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10066.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10066
                          </a>
                          Bachelor of Engineering Science
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09119.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09119
                          </a>
                          Bachelor of Computing Science (Honours)
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10143.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10143
                          </a>
                          Bachelor of Information Technology
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10148.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10148
                          </a>
                          Bachelor of Science in Information Technology
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10229.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10229
                          </a>
                          Bachelor of Science in Games Development
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10345.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10345
                          </a>
                          Bachelor of Science in Information Technology Diploma
                          in Information Technology Professional Practice
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10395.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10395
                          </a>
                          Bachelor of Information Systems
                        </li>
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
                            href="https://handbook.uts.edu.au/courses/c10122.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10122
                          </a>
                          Bachelor of Nursing
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10225.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10225
                          </a>
                          Bachelor of Midwifery
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10300.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10300
                          </a>
                          Bachelor of Sport and Exercise Science
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10301.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10301
                          </a>
                          Bachelor of Sport and Exercise Management
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10360.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10360
                          </a>
                          Bachelor of Health Science
                        </li>
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
                            href="https://handbook.uts.edu.au/courses/c10124.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10124
                          </a>
                          Bachelor of Laws
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09083.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09083
                          </a>
                          Bachelor of Laws (Honours)
                        </li>
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
                            href="https://handbook.uts.edu.au/courses/c10115.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10115
                          </a>
                          Bachelor of Biomedical Science
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10172.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10172
                          </a>
                          Bachelor of Biotechnology
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10184.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10184
                          </a>
                          Bachelor of Medical Science
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10223.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10223
                          </a>
                          Bachelor of Environmental Biology
                        </li>
                        <li>
                          {' '}
                          <a
                            href="https://handbook.uts.edu.au/courses/c10228.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10228
                          </a>
                          Bachelor of Marine Biology
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10242.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10242
                          </a>
                          Bachelor of Science
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10275.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10275
                          </a>
                          Bachelor of Medicinal Chemistry
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10346.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10346
                          </a>
                          Bachelor of Biomedical Physics
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10347.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10347
                          </a>
                          Bachelor of Advanced Science
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10384.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10384
                          </a>
                          Bachelor of Science in Analytics
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c10387.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10387
                          </a>
                          Bachelor of Forensic Science
                        </li>
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
                            href="https://handbook.uts.edu.au/courses/c10390.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C10390
                          </a>
                          Bachelor of Technology and Innovation
                        </li>
                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c20060.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C20060
                          </a>
                          Diploma in Innovation
                        </li>

                        <li>
                          <a
                            href="https://handbook.uts.edu.au/courses/c09122.html"
                            target="_blank"
                            rel="noreferrer"
                          >
                            C09122
                          </a>
                          Bachelor of Creative Intelligence and Innovation
                          (Honours)
                        </li>
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
