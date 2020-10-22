import React, { useState, useEffect } from 'react';
import '../../res/css/tags.css';
import { Container, Card, InputGroup, FormControl } from 'react-bootstrap';
import { getAllTags, setTags } from '../../tags';
import { TagsChosen } from './tagsChosen';

export const RecommendationTags: React.FC = () => {
  const [tagsToShow, setTagsToShow] = useState([] as any);
  const [dbTags, setDbTags] = useState([] as any);
  const [selectedTags, setSelectedTags] = useState([] as any);

  useEffect(() => {
    getAllTags().then(
      (result) => {
        console.log(result);
        setDbTags(result);
      },
      () => {
        console.log('There was a problem retrieving the courses');
      },
    );
  }, []);

  useEffect(() => {
    setTagsToShow(
      dbTags.map((t: any) => (
        <li key={t.id}>
          <input
            type="checkbox"
            id={t.id}
            onChange={() => toggleTag(t.id)}
            checked={IsTagIsSelected(t.id)}
            className="button"
          />
          <label htmlFor={t.id}>{t.name}</label>
        </li>
      )),
    );
  }, [dbTags, selectedTags]);

  const IsTagIsSelected = (id: number) => {
    return selectedTags.includes(id);
  };

  const toggleTag = async (id: number) => {
    let tags = selectedTags.slice();
    if (IsTagIsSelected(id)) {
      tags = tags.filter((t) => t !== id);
    } else {
      tags.push(id);
    }
    await setSelectedTags(tags);
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <TagsChosen />

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
      <button
        onClick={() => setTags(selectedTags)}
        className="btn btn-primary nextButton"
      >
        Set New Tags
      </button>
    </div>
  );
};
