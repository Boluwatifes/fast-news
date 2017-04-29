# Fast News

[![Code Climate](https://codeclimate.com/github/Boluwatifes/fast-news/badges/gpa.svg)](https://codeclimate.com/github/Boluwatifes/fast-news)
[![Test Coverage](https://codeclimate.com/github/Boluwatifes/fast-news/badges/coverage.svg)](https://codeclimate.com/github/Boluwatifes/fast-news/coverage)
[![Issue Count](https://codeclimate.com/github/Boluwatifes/fast-news/badges/issue_count.svg)](https://codeclimate.com/github/Boluwatifes/fast-news)
[![codecov](https://codecov.io/gh/Boluwatifes/fast-news/branch/master/graph/badge.svg)](https://codecov.io/gh/Boluwatifes/fast-news)
[![Build Status](https://travis-ci.org/Boluwatifes/fast-news.svg?branch=master)](https://travis-ci.org/Boluwatifes/fast-news)

Fast news provide an efficient way to keep track of all the trending news headline at your comfort
match(
    { routes, location: req.url },
    (err, redirectLocation, renderProps) => {

      // in case of error display the error message
      if (err) {
        return res.status(500).send(err.message);
      }

      // in case of redirect propagate the redirect to the browser
      if (redirectLocation) {
        return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
      }

      // generate the React markup for the current route
      let markup;
      if (renderProps) {
        // if the current route matched we have renderProps
        markup = renderToString(<RouterContext {...renderProps}/>);
      } else {
        // otherwise we can render a 404 page
        markup = renderToString(<NotFoundPage/>);
        res.status(404);
      }

      // render the index template with the embedded React markup
      return res.render('index', { markup });
    }
  );