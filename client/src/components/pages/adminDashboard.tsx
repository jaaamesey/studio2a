import React from 'react';
import { Link } from 'react-router-dom';
import {
  CardDeck,
  Card,
  Button,
  Table,
  Row,
  Col,
  Form,
  InputGroup,
  FormControl,
} from 'react-bootstrap';
import '../../res/css/forms.css';
import '../../res/css/admin.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export const AdminDashboard: React.FC = () => {
  return (
    <div>
      <CardDeck>
        <Card className="card-admin">
          <Card.Body>
            <Card.Title className="card-title">Most selected tags</Card.Title>
            <Table bordered className="admin-panel">
              <tbody>
                <tr>
                  <td>
                    <Button className="btn btn-default tag">Leadership</Button>
                  </td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>
                    <Button className="btn btn-default tag">Leadership</Button>
                  </td>
                  <td>59</td>
                </tr>
                <tr>
                  <td>
                    <Button className="btn btn-default tag">Leadership</Button>
                  </td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>
                    <Button className="btn btn-default tag">Leadership</Button>
                  </td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>
                    <Button className="btn btn-default tag">Leadership</Button>
                  </td>
                  <td>31</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
        <Card className="card-admin">
          <Card.Body>
            <Card.Title className="card-title">
              Most Recommended courses
            </Card.Title>
            <Table bordered className="admin-panel">
              <tbody>
                <tr>
                  <td>Bachelor of Engineering (Honours)</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>Bachelor of Information Technology</td>
                  <td>59</td>
                </tr>
                <tr>
                  <td>Bachelor of Business</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>Bachelor of Science</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Bachelor of Desing in Architecture</td>
                  <td>31</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>{' '}
        <Card className="card-admin">
          <Card.Body>
            <Card.Title className="card-title">
              Most recommended faculties
            </Card.Title>
            <Table bordered className="admin-panel">
              <tbody>
                <tr>
                  <td>Engineering and IT</td>
                  <td>66</td>
                </tr>
                <tr>
                  <td>Science</td>
                  <td>59</td>
                </tr>
                <tr>
                  <td>Business</td>
                  <td>41</td>
                </tr>
                <tr>
                  <td>Art and Social Sciences</td>
                  <td>35</td>
                </tr>
                <tr>
                  <td>Design, Architecture and Building</td>
                  <td>31</td>
                </tr>
              </tbody>
            </Table>
          </Card.Body>
        </Card>
      </CardDeck>
      <h2 className="table-title">
        <strong>Courses List:</strong>
        <Link to="addCourses" className="btn btn-add">
          Add Course
        </Link>
      </h2>
      <div className="scrollable">
        <Table bordered className="admin-course-list sticky">
          <thead>
            <tr>
              <th>Course Code</th>
              <th>Title</th>
              <th>Faculty</th>
              <th>Times recommended</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>{' '}
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>{' '}
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>{' '}
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>{' '}
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>{' '}
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>{' '}
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
            <tr>
              <td>C12345</td>
              <td>Bachelor of Engineering (Honours)</td>
              <td>Engineering and IT</td>
              <td>34</td>
              <td>
                <button className="btn-edit">
                  <FontAwesomeIcon icon={faEdit} />
                </button>
                <button className="btn-delete">
                  <FontAwesomeIcon icon={faTrash} />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Row>
        <Col>
          {' '}
          <h2 className="table-title">
            <strong>Tags List:</strong>
            <Form>
              <Form.Row className="add-tag-form">
                <Col xs="auto">
                  <Form.Label htmlFor="inlineFormInput" srOnly>
                    New tag
                  </Form.Label>
                  <Form.Control
                    className="mb-2"
                    id="inlineFormInput"
                    placeholder="New tag"
                  />
                </Col>
                <Col xs="auto">
                  <Button type="submit" className="mb-2 add-tag-btn">
                    Add
                  </Button>
                </Col>
              </Form.Row>
            </Form>
          </h2>
          <div className="scrollable">
            <Table bordered className="admin-course-list sticky">
              <thead>
                <tr>
                  <th>Tag ID</th>
                  <th>Name</th>
                  <th>Times selected</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
                <tr>
                  <td>T024</td>
                  <td>Problem Solving</td>
                  <td>59</td>
                  <td>
                    <button className="btn-edit">
                      <FontAwesomeIcon icon={faEdit} />
                    </button>
                    <button className="btn-delete">
                      <FontAwesomeIcon icon={faTrash} />
                    </button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          {' '}
          <h2 className="table-title">
            <strong>Users List:</strong>
          </h2>
          <div className="scrollable">
            <Table bordered className="admin-course-list sticky">
              <thead>
                <tr>
                  <th>User ID</th>
                  <th>Name</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
              <tbody>
                <tr>
                  <td>U065</td>
                  <td>John Doe</td>
                  <td>John@email.com</td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    </div>
  );
};
