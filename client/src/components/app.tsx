import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../res/css/style.css';

import { NavigationBar, Footer } from './nav';
import {
  HomePage,
  TestPage,
  RegistrationPage,
  LoginPage,
  RecommendationTags,
  RecommendationList,
  ViewCourses,
  AddCourses,
  AdminDashboard,
  ContactUs,
} from './pages';

import { user } from '../user';

// Send credentials by default if logged in
axios.defaults.withCredentials = !!user;

// TEST AUTH (remove later)
if (user) {
  axios.post('http://127.0.0.1:9000/user/testAuth');
}

const App: React.FC = () => {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <NavigationBar />
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/test">
              <TestPage />
            </Route>
            <Route path="/tags">
              <RecommendationTags />
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
            <Route path="/contactUs">
              <ContactUs />
            </Route>
            <Route path="/recommendationlist">
              <RecommendationList />
            </Route>
            <Route path="/addCourses">
              <AddCourses />
            </Route>
            <Route path="/admindashboard">
              <AdminDashboard />
            </Route>
          </Switch>
        </Router>
      </div>
      <Footer />
    </div>
  );
};

export default App;
