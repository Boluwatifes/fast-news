import React from 'react';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component {
  render() {
    return (
      <nav className="h-auto p-10">
        <div className="nav-wrapper">
          <Link className="brand-logo" to="/">Fast News</Link>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><Link to="/login">Get Started</Link></li>
            <li><Link to="/my-news">My News</Link></li>
            <li><Link to="/portal">News Portal</Link></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><Link to="/login">Get Started</Link></li>
            <li><Link to="/my-news">My News</Link></li>
            <li><Link to="/portal">News Portal</Link></li>
          </ul>
          <div className="clear" />
        </div>
      </nav>
    );
  }
}
