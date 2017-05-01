import React from 'react';

export default class MyNews extends React.Component {
  constructor() {
    super();
    console.log(`User : ${UserStore.getOne()}`);
    this.state = {
      profile: UserStore.getOne(),
    };
    this.printAll = JSON.stringify(this.state.profile);
  }
  render() {
    return (
      <div className="col s12">
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">textsms</i>
                <input type="text" id="autocomplete-input" className="autocomplete" />
                <label htmlFor="autocomplete-input">Autocomplete</label>
              </div>
            </div>
          </div>
        </div>
        <div id="replace">
          <h1>My News</h1>
          { this.printAll }
        </div>
        <div className="clear" />
      </div>
    );
  }
}
