import React from 'react';
import NewsStore from '../stores/NewsStore';

export default class Portal extends React.Component {
  constructor() {
    super();
    this.state = {
      sources: NewsStore.getAll(),
    };
    this.allSources = this.state.sources;
    this.listSources = this.allSources.map((source) => {
      return (
        <li key={ source.id }>{ source.name }</li>
      );
    });
  }
  render() {
    return (
      <div className="col s12 home-inner">
        <div class="inner-content">
          <h1>My Portal</h1>
          <ul>
            { this.listSources }
          </ul>
        </div>
        <div class="clear"></div>
      </div>
    );
  }
}
