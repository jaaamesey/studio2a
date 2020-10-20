import React, { useState, useEffect } from 'react';
import '../../res/css/tags.css';
import { Container, Card, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getAllTags } from '../../tags';

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

  const [tags, setTags] = React.useState([]);

  useEffect(() => 
  { 
    getAllTags()
    .then((result) => {
      console.log(result);
      setTags(result.map(t => (<GridListComponent id={"grid-opt-"+t.id} tileInfo={t.name}/>)));
    }, () => {
      console.log("There was a problem retrieving the courses");
    })
  },[]);

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
          {tags}
        </Container>
      </Card>

      <Link to="/recommendationlist" className="btn btn-primary nextButton">
        <span style={{ marginTop: 2, marginRight: 10, fontSize: '1.1em' }}>
          Set and View my course recommendations
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
