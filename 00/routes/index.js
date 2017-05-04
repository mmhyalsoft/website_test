var express = require('express');
var router = express.Router();
var mongo = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;
var assert = require('assert');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

module.exports = router;
