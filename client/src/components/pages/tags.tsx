import React, { useState, useEffect } from 'react';
import '../../res/css/tags.css';
import { Container, Card, InputGroup, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { getAllTags, setTags } from '../../tags';
import { TagsChosen } from './tagsChosen';

export const RecommendationTags: React.FC = () => {
  function GridListComponent(option: {
    id: string | undefined;
    tileInfo: React.ReactNode;
  }) {
    return (
      <li id={option.id}>
        <input type="checkbox" id={option.id} className="button" />
        <label htmlFor={option.id}>{option.tileInfo}</label>
      </li>
    );
  }

  const [tagsToShow, setTagsToShow] = React.useState([]);

  useEffect(() => 
  { 
    getAllTags()
    .then((result) => {
      console.log(result);
      setTagsToShow(result.map(t => (<GridListComponent id={"grid-opt-"+t.id} tileInfo={t.name}/>)));
    }, () => {
      console.log("There was a problem retrieving the courses");
    })
  },[]);

  return (
    <div>
      <Container>
        <br/>
        <br/>
        <TagsChosen/>

        <h3>...Or...</h3>
        <h3>Select A New Set Of Course Tags</h3>

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
          {tagsToShow}
        </Container>
      </Card>
      <button onClick={() => setTags([1,2,3])} className="btn btn-primary nextButton">
        Set New Tags
      </button>
    </div>
  );
};
