import React from 'react';
import '../../res/css/tags.css';
import BootstrapTable from 'react-bootstrap-table-next';
import search from './search.svg';
import {
  Button,
  Container,
  Row,
  Card,
  InputGroup,
  FormControl,
} from 'react-bootstrap';

export const RecommendationTags: React.FC = () => {
  return (
    <div>
      <Container>
        <h3>Search Course Tags</h3>

        <InputGroup className="search">
          <InputGroup.Prepend>
            <InputGroup.Text>Search:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inlineFormInputGroup"
            placeholder="Search your skill preferences..."
          />
        </InputGroup>

        <h4>Choose up to 10 interests</h4>
      </Container>

      <Card className="card">
        <Card.Header as="h5">Skills and Attributes</Card.Header>
        <Container>
          <Row>
            <Button className="button">Emotional Intelligence</Button>
            <Button className="button">Flexibility</Button>
            <Button className="button">Motivation</Button>
            <Button className="button">Communication</Button>
          </Row>

          <Row>
            <Button className="button">Public Speaking</Button>
            <Button className="button">Problem Solving</Button>
            <Button className="button">Analytics</Button>
            <Button className="button">Creativity</Button>
          </Row>

          <Row>
            <Button className="button">Programming Skills</Button>
            <Button className="button">Leadership</Button>
            <Button className="button">Management</Button>
            <Button className="button">Willingness To Learn</Button>
          </Row>

          <Row>
            <Button className="button">Customer Service</Button>
            <Button className="button">Flexibility</Button>
            <Button className="button">Motivation</Button>
            <Button className="button">Attention to Detail</Button>
          </Row>

          <Row>
            <Button className="button">Empathy</Button>
            <Button className="button">Decision Making</Button>
            <Button className="button">Organisation</Button>
            <Button className="button">Time Management</Button>
          </Row>

          <Row>
            <Button className="button">Teamwork</Button>
            <Button className="button">Strategic Planning</Button>
            <Button className="button">Public Speaking</Button>
            <Button className="button">Critical Thinking</Button>
          </Row>

          <Row>
            <Button className="button">Mathematics</Button>
            <Button className="button">English</Button>
            <Button className="button">Biology</Button>
            <Button className="button">History</Button>
          </Row>
        </Container>
      </Card>

      <Button className="nextButton" onClick={this.handleClick}>
        View my Course Preference
      </Button>
    </div>
  );
};
