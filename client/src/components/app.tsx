import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../res/css/style.css';

import { NavigationBar } from './nav';
import {
  HomePage,
  TestPage,
  TestPage2,
  RegistrationPage,
  LoginPage,
  RecommendationList,
  ViewCourses,
} from './pages';

const App: React.FC = () => {
  return (
    <Router>
      <NavigationBar />
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/test">
          <TestPage />
        </Route>
        <Route path="/viewCourses">
          <ViewCourses />
        </Route>
        <Route path="/registration">
          <RegistrationPage />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/recommendationlist">
          <RecommendationList />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
