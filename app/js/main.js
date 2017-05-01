import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter } from 'react-router-dom';
import React from 'react';
import ReactDom from 'react-dom';
import Layout from './pages/Layout';
import '../../public/assets/sass/styles.scss';
import './functions.js';

const app = document.getElementById('app');

ReactDom.render(
  <Router>
    <Layout />
  </Router>, app,
);
