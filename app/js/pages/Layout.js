import { Route } from 'react-router';
import React from 'react';
import Header from '../components/Header';
import Body from '../components/Body';
import Login from './Login';
import MyNews from './MyNews';
import Portal from './Portal';

export default class Layout extends React.Component {
  render() {
    return (
      <div className="width-100">
        <Header />
        <div className="row home-div m-0">
          <Route path="/" exact={true} component={Body} />
          <Route path="/login" component={Login} />
          <Route path="/my-news" component={MyNews} />
          <Route path="/portal" component={Portal} />
          <div class="clear"></div>
        </div>
      </div>
    );
  }
}

