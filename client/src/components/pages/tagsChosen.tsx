import React, { useState, useEffect } from 'react';
import { Button, Container, Col, Row } from 'react-bootstrap';
import '../../res/css/tags.css';
import { getTagsForUser } from '../../tags';

export const TagsChosen: React.FC = () => {

  const [tagsToShow, setTagsToShow] = React.useState([]);

  useEffect(() => 
  { 
    getTagsForUser()
    .then((result) => {
      console.log(result);
	  setTagsToShow(result.map((t, i) => (<Button key={"tag-list-item-"+i}className="btn btn-primary tag-btn">{t.name}</Button>)));
    }, () => {
      console.log("There was a problem retrieving the courses");
    })
  },[]);

  return (
    <div>
      <Container>
        <Row>
          <Col sm={2} className="tag-title">
            <h4>Tags chosen:</h4>
          </Col>
          <Col sm={9} className="tag-panel">
            <Row>
				{tagsToShow}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
