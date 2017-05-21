'use strict';

const React = require('react');
const ReactDOMServer = require('react-dom/server');
import Layout from '../frontend/Layout';
import { StaticRouter as SR } from 'react-router';
const { createElement } = React; 
const express = require('express');
const iterate_app = express();

iterate_app.use(express.static('public'));

iterate_app.use( (req, res, next) => {
  res.setHeader('Content-Type', 'text/html');

  const ctx = {};
  const html = ReactDOMServer.renderToString(
   <SR location={req.url} context={ctx}>
     <Layout />
   </SR> 
  );

  res.end(` 
<!DOCTYPE html>
<meta charset="utf-8"/>
<head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
   <div id="container">${html}</div>
  <script src="https://www.gstatic.com/firebasejs/3.7.3/firebase.js"></script>
  <script>
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCyU7gnZCvZRxyKil9lkTAGZY_Kd_I0DrE",
    authDomain: "rockthepiano-8edbf.firebaseapp.com",
    databaseURL: "https://rockthepiano-8edbf.firebaseio.com",
    storageBucket: "rockthepiano-8edbf.appspot.com",
    messagingSenderId: "563255425107"
  };
  firebase.initializeApp(config);
  </script>
  <script src='bundle.js'></script>
  <!--TODO AG include this library in git 
  https://github.com/bit101/tones-->
  <script type="text/javascript" src="tones.js"></script>
  <script type="text/javascript" src="../frontend/lib/fire-scripts.js"></script>
</body>
  `); 
});

iterate_app.listen(8080);
