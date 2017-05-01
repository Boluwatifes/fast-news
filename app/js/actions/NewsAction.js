import dispatcher from '../dispatcher';

export function createNews(source) {
  dispatcher.dispatch({
    type: 'CREATE_NEWS',
    source,
  });
}
