'use strict';

/**
 * Module dependencies.
 */
var MongoClient = require('mongodb').MongoClient;


exports.index = function(req, res) {
  res.render('index', {
    user: req.user || null,
    request: req
  });
};

exports.getData = function(req, res) {

  MongoClient.connect('mongodb://localhost/dashboard-dev', function(err, db) {
    if(err) throw err;

    var collection = db.collection('test_insert');

      // Locate all the entries using find
      collection.find().toArray(function(err, results) {
        res.send(results);
        // Let's close the db
        db.close();
      });

  });

};
