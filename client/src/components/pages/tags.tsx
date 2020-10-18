import React from 'react';
import '../../res/css/tags.css';
import { Container, Card, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const RecommendationTags: React.FC = () => {
  function GridListComponent(option: {
    id: string | undefined;
    tileInfo: React.ReactNode;
  }) {
    return (
      <li>
        <input type="checkbox" id={option.id} className="button" />
        <label htmlFor={option.id}>{option.tileInfo}</label>
      </li>
    );
  }

  return (
    <div>
      <Container>
        <h3>Select Course Tags</h3>

        <h5>Select up to 10 things that interest you:</h5>
      </Container>

      <Card className="card">
        <Card.Header className="title" as="h4">
          Skills and Attributes
        </Card.Header>
        <InputGroup className="search" style={{ marginTop: 22 }}>
          <InputGroup.Prepend>
            <InputGroup.Text>Search</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            id="inlineFormInputGroup"
            placeholder="Search your skill preferences..."
          />
        </InputGroup>
        <Container fluid className="grid">
          <GridListComponent
            id="grid-opt-1"
            tileInfo="Emotional Intelligence"
          />
          <GridListComponent id="grid-opt-2" tileInfo="Flexibility" />
          <GridListComponent id="grid-opt-3" tileInfo="Motivation" />
          <GridListComponent id="grid-opt-4" tileInfo="Communication" />
          <GridListComponent id="grid-opt-5" tileInfo="Public Speaking" />
          <GridListComponent id="grid-opt-6" tileInfo="Problem Solving" />
          <GridListComponent id="grid-opt-7" tileInfo="Analytics" />
          <GridListComponent id="grid-opt-8" tileInfo="Creativity" />
          <GridListComponent id="grid-opt-9" tileInfo="Programming Skills" />
          <GridListComponent id="grid-opt-10" tileInfo="Leadership" />
          <GridListComponent id="grid-opt-11" tileInfo="Management" />
          <GridListComponent id="grid-opt-12" tileInfo="Willingness to Learn" />
          <GridListComponent id="grid-opt-13" tileInfo="Customer Service" />
          <GridListComponent id="grid-opt-14" tileInfo="Attention to Detail" />
          <GridListComponent id="grid-opt-15" tileInfo="Empathy" />
          <GridListComponent id="grid-opt-16" tileInfo="Decision Making" />
          <GridListComponent id="grid-opt-17" tileInfo="Organisation" />
          <GridListComponent id="grid-opt-18" tileInfo="Time Management" />
          <GridListComponent id="grid-opt-19" tileInfo="Teamwork" />
          <GridListComponent id="grid-opt-20" tileInfo="Strategic Planning" />
          <GridListComponent id="grid-opt-21" tileInfo="Public Speaking" />
          <GridListComponent id="grid-opt-22" tileInfo="Critical Thinking" />
          <GridListComponent id="grid-opt-23" tileInfo="Mathematics" />
          <GridListComponent id="grid-opt-24" tileInfo="English" />
          <GridListComponent id="grid-opt-25" tileInfo="Biology" />
          <GridListComponent id="grid-opt-26" tileInfo="History" />
          <GridListComponent id="grid-opt-27" tileInfo="Geography" />
          <GridListComponent id="grid-opt-28" tileInfo="Law" />
          <GridListComponent id="grid-opt-29" tileInfo="Economics" />
          <GridListComponent id="grid-opt-30" tileInfo="Business" />
        </Container>
      </Card>

      <Link to="/recommendationlist" className="btn btn-primary nextButton">
        <span style={{ marginTop: 2, marginRight: 10, fontSize: '1.1em' }}>
          View my course recommendations
        </span>
        <span>
          <FontAwesomeIcon
            icon={faChevronRight}
            size="2x"
            style={{ transform: 'scale(0.8)' }}
          />
        </span>
      </Link>
    </div>
  );
};
