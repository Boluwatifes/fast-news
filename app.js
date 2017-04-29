import ReactDOMServer from 'react-dom/server'
import { StaticRouter } from 'react-router'
import path from 'path';
import { Server } from 'http';
import Express from 'express';
import React from 'react';
import Layout from './app/js/pages/Layout';

const app = new Express();
const server = new Server(app);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/public/views'));

app.use(Express.static(path.join(__dirname, 'public')));

app.listen(process.env.PORT || 8000);

// universal routing and rendering
app.get('*', (req, res) => {
  const context = {}
  const html = ReactDOMServer.renderToString(
    <StaticRouter
      location={req.url}
      context={context}
    >
      <Layout/>
    </StaticRouter>
  );
  if (context.url) {
    res.writeHead(301, {
      Location: context.url
    });
    res.end();
  } else {
    res.render('index', { html });
    res.end();
  }
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
server.listen(port, err => {
  if (err) {
    return console.error(err);
  }
  console.info(`Server running on http://localhost:${port} [${env}]`);
});