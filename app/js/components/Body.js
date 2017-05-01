import { Link } from 'react-router-dom';
import React from 'react';

export default class Body extends React.Component {
  render() {
    const displayText = 'Sign in with Google';
    return (
      <div className="col s12 home-inner">
        <div className="inner-content">
          <div id="index-banner" className="parallax-container">
            <div className="section no-pad-bot">
              <div className="container">
                <br /><br />
                <h1 className="header center teal-text text-lighten-2">Hi Guest!</h1>
                <div className="row center">
                  <h5 className="header col s12 light">Fast News brings to you all your favorite news at your comfort. News can't get any better with 70+ news source!</h5>
                </div>
                <div className="row center">
                  <Link class="btn-large waves-effect waves-light teal lighten-1" to="/login">Get Started</Link>
                </div>
                <br />
              </div>
            </div>
            <div className="parallax"><img src="background1.jpg" alt="Unsplashed background img 1" /></div>
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
