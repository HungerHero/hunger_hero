const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
var bodyParser = require('body-parser')
// Always require and configure near the top
require('dotenv').config();
// Connect to the database
require('./config/database');

const app = express();



app.use(logger('dev'));

// Configure both serve-favicon & static middleware
// to serve from the production 'build' folder
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));

// Middleware to check and verify a JWT and
// assign the user object from the JWT to req.user
app.use(require('./config/checkToken'));

const port = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users'));
app.use('/api/foods', require('./routes/api/foods'));
app.use('/api/requests', require('./routes/api/requests'));
app.use('/api/pickups', require('./routes/api/pickups'));


// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX/API requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, function() {
  console.log(`Express app running on port ${port}`);
});

// potential fix for heroku deployment
// app.listen(process.env.PORT || 5000, function() {
//   console.log(`Express app running on port ${port}`);
// });
