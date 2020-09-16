import React from 'react';
import '../../res/css/viewCourses.css';
import '../../res/css/tables.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container, Col, Row, Accordion, Card } from 'react-bootstrap';
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Communication
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            International Studies and Education
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Accouting
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            Economics
                          </Accordion.Toggle>

                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="2"
                            className="faculty-accordion-toggle"
                          >
                            Finance
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="3"
                            className="faculty-accordion-toggle"
                          >
                            Management
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="4"
                            className="faculty-accordion-toggle"
                          >
                            Marketing
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Design
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            Architecture
                          </Accordion.Toggle>

                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="2"
                            className="faculty-accordion-toggle"
                          >
                            Built Environment
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Engineering
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            Information Technology
                          </Accordion.Toggle>

                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Diabetes
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            Health Science
                          </Accordion.Toggle>

                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="2"
                            className="faculty-accordion-toggle"
                          >
                            Health Services Management
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="3"
                            className="faculty-accordion-toggle"
                          >
                            High Performance Sport
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="4"
                            className="faculty-accordion-toggle"
                          >
                            Midwifery
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="5"
                            className="faculty-accordion-toggle"
                          >
                            Nursing
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="6"
                            className="faculty-accordion-toggle"
                          >
                            Paliative Care
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="6">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="7"
                            className="faculty-accordion-toggle"
                          >
                            Public Health
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="7">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="8"
                            className="faculty-accordion-toggle"
                          >
                            Sport and Exercise
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="8">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Life Sciences
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            Mathematical and Physical Sciences
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
                    <div className="faculty-accordion">
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="0"
                            className="faculty-accordion-toggle"
                          >
                            Clinical Psychology
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="0">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="1"
                            className="faculty-accordion-toggle"
                          >
                            Health Policy
                          </Accordion.Toggle>

                          <Accordion.Collapse eventKey="1">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="2"
                            className="faculty-accordion-toggle"
                          >
                            Orthoptics
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="2">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="3"
                            className="faculty-accordion-toggle"
                          >
                            Pharmacy
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="3">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="4"
                            className="faculty-accordion-toggle"
                          >
                            Physiotherapy
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="4">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="5"
                            className="faculty-accordion-toggle"
                          >
                            Genetic Counselling
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="5">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
                      <Accordion>
                        <Card className="faculty-accordion-card">
                          <Accordion.Toggle
                            as={Card.Header}
                            variant="link"
                            eventKey="6"
                            className="faculty-accordion-toggle"
                          >
                            Speech Pathology
                          </Accordion.Toggle>
                          <Accordion.Collapse eventKey="6">
                            <Card.Body>Hello! Im the body</Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      </Accordion>
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
