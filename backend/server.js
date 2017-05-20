'use strict';

var _Layout = require('../frontend/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const React = require('react');
const ReactDOMServer = require('react-dom/server');
//import { StaticRouter } from 'react-router';
//import { renderToString } from 'react-dom/server';

//const Layout = require('../frontend/Layout');
const { createElement } = React;
const express = require('express');
const iterate_app = express();

//const ctx = {};

/*const appString = ReactDOMServer.renderToString(
  <SR 
    context={ctx}
    location='localhost:8080/'>
    <Layout />
  </SR>
); 

const html = `
<!DOCTYPE html>
<meta charset="utf-8"/>
<head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
   <div id="container">${appString}</div>
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
`;*/

iterate_app.use(express.static('public'));

iterate_app.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/html');
  console.log("within");
  const ctx = {};
  const html = ReactDOMServer.renderToString(React.createElement(
    _reactRouter.StaticRouter,
    { location: req.url, context: ctx },
    React.createElement(_Layout2.default, null)
  ));

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

/*iterate_app.use('/drum', (req, res) => {
  const appString = ReactDOMServer.renderToString(
  <SR 
    context={ctx}
    location={req.url}>
    <Layout />
  </SR>
);*/
// const ctx = {};
/*const appString = ReactDOMServer.renderToString(
  <SR context={ctx}> 
    <Layout />
  </SR>
);
const html = `
<!DOCTYPE html>
<meta charset="utf-8"/>
<head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
   <div id="container">${appString}</div>
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
`;

  res.setHeader('content-type', 'text/html');
  res.end(html);
});
iterate_app.use('/guitar', (req, res) => {
  /*const appString = ReactDOMServer.renderToString(
  <SR 
    context={ctx}
    location={req.url}>
    <Layout />
  </SR>
);*/
//const ctx = {};
/* const appString = ReactDOMServer.renderToString(
  <SR  context={ctx}>
    <Layout />
  </SR>
); 

const html = `
<!DOCTYPE html>
<meta charset="utf-8"/>
<head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
   <div id="container">${appString}</div>
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
`;

  res.setHeader('content-type', 'text/html');
  res.end(html);
});
iterate_app.use('/', (req, res) => {
 /* const appString = ReactDOMServer.renderToString(
  <SR 
    context={ctx}
    location={req.url}>
    <Layout />
  </SR>
);*/
/*const appString = ReactDOMServer.renderToString(
  <SR context={ctx}> 
    <Layout />
  </SR>
);
//const ctx = {};
const html = `
<!DOCTYPE html>
<meta charset="utf-8"/>
<head>
  <link href="style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
   <div id="container">${appString}</div>
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
`;

  res.setHeader('content-type', 'text/html');
  res.end(html);
});*/
iterate_app.listen(8080);