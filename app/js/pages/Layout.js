import {
  Route,
  Redirect,
  withRouter } from 'react-router-dom';
import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Login from './Login';
import MyNews from './MyNews';
import Portal from './Portal';

/*
const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    fakeAuth.isAuthenticated ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
);
*/

export default class Layout extends React.Component {
  render() {
    return (
      <div className="width-100">
        <Header />
        <div className="row home-div m-0">
          <Route path="/" exact component={Body} />
          <Route path="/login" component={Login} />
          <Route path="/my-news" component={MyNews} />
          <Route path="/portal" component={Portal} />
          <div className="clear" />
        </div>
      </div>
    );
  }
}

