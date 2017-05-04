var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');

var react = require('react');
var ReactDOM = require('react-dom');


ReactDOM.render(react.createElement('h2', null, 'Hello world'), document.getElementById('ciao') );

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
