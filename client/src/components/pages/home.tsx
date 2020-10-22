import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../res/css/homepage.css';
import Image1 from '../../res/img/Picture1.png';
import Image2 from '../../res/img/Picture2.png';
import Image3 from '../../res/img/Picture3.png';

import { user } from '../../user';

export const HomePage: React.FC = () => {
  return (
    <div>
      <Carousel
        nextIcon={<span aria-h12idden="true" className="carousel-control" />}
        prevIcon={<span aria-hidden="true" className="carousel-control" />}
        className="carousel-container"
      >
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={Image1}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>Course Recommendation System</h3>
            <p>
              Welcome to UTS Course Recommendation System. Here, you will be
              able to input your preferences including your interests and study
              level. The system will then recommend suitable courses for you.
            </p>

            <Link
              to={user ? 'tags' : 'login'}
              className="btn btn-primary carousel-btn"
            >
              Start Here
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={Image2}
            alt="Second slide"
          />
          <Carousel.Caption>
            <h4>Explore your study options</h4>
            <p>
              Find the right degree for you: You will also be able to browse
              through the whole catalogue of courses that we offer.
            </p>
            <Link to="viewCourses" className="btn btn-primary carousel-btn">
              See more
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 img-carousel"
            src={Image3}
            alt="Third slide"
          />
          <Carousel.Caption>
            <h4>Get in touch with us</h4>
            <p>
              Whether you are a prospective or current student, if you would
              like to ask about courses, make an enquiry online.
            </p>
            <Link to="contactUs" className="btn btn-primary carousel-btn">
              Contact us
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
