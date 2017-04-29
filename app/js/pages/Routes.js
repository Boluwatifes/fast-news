
import { BrowserRouter as Router, Route } from 'react-router-dom';
import React from 'react';
import Body from '../components/Body';
import Login from './Login';
import MyNews from './MyNews';
import Portal from './Portal';

const routes = (
  <Body>
    <Route path="/" exact component={Body} />
    <Route path="/login" component={Login} />
    <Route path="/my-news" component={MyNews} />
    <Route path="/portal" component={Portal} />
  </Body>
);

export default routes;
