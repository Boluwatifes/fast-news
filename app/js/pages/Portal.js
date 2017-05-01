import React from 'react';
import NewsStore from '../stores/NewsStore';
import * as NewsAction from '../actions/NewsAction';
import $ from 'jquery';

export default class Portal extends React.Component {
  constructor() {
    super();
    this.allSources = NewsStore.getSources();
    this.listSources = this.allSources.map(source => (
      <option value={source.id}>{source.name}</option>
    ));
    this.defaultArticles = NewsStore.getArticles('bbc-news', '');
    this.listDefaultArticles = this.defaultArticles.map(article => (
      <div key={article.publishedAt} className="col s12 m6 l4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={article.urlToImage} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
            <p><a href={article.url} target="blank">Read More</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
            <p>{article.description}</p>
          </div>
        </div>
      </div>
      ));
    this.state = {
      content: this.listDefaultArticles,
      sources: this.listSources,
    };
    this.getArticles = this.getArticles.bind(this);
  }

  getArticles(e) {
    e.preventDefault();
    const allArticles = NewsStore.getArticles('the-next-web', '');
    const listArticles = allArticles.map(article => (
      <div key={article.publishedAt} className="col s12 m6 l4">
        <div className="card">
          <div className="card-image waves-effect waves-block waves-light">
            <img className="activator" src={article.urlToImage} />
          </div>
          <div className="card-content">
            <span className="card-title activator grey-text text-darken-4">{article.title}<i className="material-icons right">more_vert</i></span>
            <p><a href={article.url}>Read More</a></p>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4">{article.title}<i className="material-icons right">close</i></span>
            <p>{article.description}</p>
          </div>
        </div>
      </div>
      ));
    this.setState({
      content: listArticles,
    });
  }

  render() {
    return (
      <div className="col s12">
        <div className="row" id="replaceMe">
          <div className="col s12 m3 l3" />
          <div className="col s12 m9 l9">
            <div className="col s-12">
              <div className="input-field col s12">
                <select>
                  <option value="" disabled selected>Select News Source</option>
                  {this.state.sources}
                </select>
              </div>
            </div>

            <div className="col s-12">
              {this.state.content}
            </div>
          </div>
        </div>
        <div className="clear" />
      </div>
    );
  }
}
