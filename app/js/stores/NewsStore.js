import { EventEmitter } from 'events';
import request from 'request';
import $ from 'jquery';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.nSource = [];
    this.nArticles = [];
    this.sourceRequest = () => {
      request({
        url: ' https://newsapi.org/v1/sources?language=en',
        qs: {
          apiKey: process.env.NEWS_API || '213327409d384371851777e7c7f78dfe',
        },
        method: 'GET',
      }, (error, response, body) => {
        if (error) {
          console.error('Error Getting Data from API');
        } else {
          const bodyObj = JSON.parse(body).sources;
          bodyObj.forEach((eachSource) => {
            const source = {};
            source.id = eachSource.id;
            source.name = eachSource.name;
            source.description = eachSource.description;
            source.url = eachSource.url;
            source.category = eachSource.category;
            source.language = eachSource.language;
            source.country = eachSource.country;
            source.sortBysAvailable = eachSource.sortBysAvailable;
            this.nSource.push(source);
          });
        }
      });
    };

    this.articleRequest = (source, sortBy) => {
      request({
        url: 'https://newsapi.org/v1/articles?',
        qs: {
          source: `${source}`,
          sortBy: `${sortBy}`,
          apiKey: process.env.NEWS_API || '213327409d384371851777e7c7f78dfe',
        },
        method: 'GET',
      }, (error, response, body) => {
        if (error) {
          console.error('Error Getting Data from API');
        } else {
          const articleObj = JSON.parse(body).articles;
          articleObj.forEach((item) => {
            const article = {};
            article.author = item.author;
            article.title = item.title;
            article.description = item.description;
            article.url = item.url;
            article.urlToImage = item.urlToImage;
            article.publishedAt = item.publishedAt;
            this.nArticles.push(article);
          });
        }
      });
    };
  }

  getSources() {
    this.sourceRequest();
    return this.nSource;
  }

  getArticles(source, sortBy = 'top') {
    this.articleRequest(source, sortBy);
    return this.nArticles;
  }

  getOneSource(source, sortBy = 'top') {
    const returnArticle = [];
    const data = `source=${source}&sortBy=${sortBy}&apiKey=213327409d384371851777e7c7f78dfe`;
    $.ajax({
      method: 'GET',
      url: 'https://newsapi.org/v1/articles?',
      data,
      success: (res) => {
        for (let i = 0; i < res.articles.length; i++) {
          let eachArticle = '';
          eachArticle += `<li>${res.articles[i].title}</li>`;

          returnArticle.push(eachArticle);
        }
      },
      error: (error) => {
        console.log(error);
      },
    });

    let ul = '<ul>';
    for (const item of returnArticle) {
      ul += item;
      console.log(item);
    }
    ul += '</ul>';
    console.log(ul);
    return ul;
  }
}

const newsStore = new NewsStore();

export default newsStore;
