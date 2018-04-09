import App from '../client/App';
import React from 'react';
import { Provider } from 'react-redux'
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import configureStore from '../client/redux/store/configureStore';

import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import userRouter from './routers/userRoute';


const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const server = express();
const router = express.Router();

// API
const API_URL = '/api'
server.use(bodyParser.urlencoded({ extended: false }))
server.use(bodyParser.json())
server.use(cookieParser())
// Basic Router Setup
server.use(`${API_URL}`, router);
router.get(`/`, (req, res) => {
  res.json({ message: 'REST API' });
})
// User Router Setup
server.use(`${API_URL}/user`, userRouter);

// Server Render
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    const store = configureStore({})
    const context = {};
    const markup = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>
    );

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(
        `<!doctype html>
        <html lang="">
          <head>
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta charset="utf-8" />
            <title>Welcome to Razzle</title>
            <meta name="viewport" content="width=device-width, initial-scale=1">
            ${assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ''}
            ${process.env.NODE_ENV === 'production'
              ? `<script src="${assets.client.js}" defer></script>`
              : `<script src="${assets.client.js}" defer crossorigin></script>`}
          </head>
          <body>
            <div id="root">${markup}</div>
          </body>
        </html>`
      );
    }
  });

export default server;
