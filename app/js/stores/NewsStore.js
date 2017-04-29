import { EventEmitter } from 'events';
import request from 'request';

class NewsStore extends EventEmitter {
  constructor() {
    super();
    this.nSource = [];
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
          this.nSource.push(source);
        });
      }
    });
  }

  getAll() {
    return this.nSource;
  }
}

const newsStore = new NewsStore();

export default newsStore;
