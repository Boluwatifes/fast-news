import React from 'react';
import Nav from './Header/Nav';

export default class Header extends React.Component {
  render() {
    return (
      <div className="row m-0">
        <Nav />
      </div>
    );
  }
}
