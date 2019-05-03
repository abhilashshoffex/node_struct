// var mongoose = require("mongoose");

// // Connect to mongodb
// mongoose.connect('mongodb://localhost/bookstore');
// var db = mongoose.connection;

// module.exports = db;

var mongodb = require('mongodb');
var uri = 'mongodb://localhost/bookstore';
// console.log("donnnnnnnnnne")
// module.exports = function(callback) {
  mongodb.MongoClient.connect(uri, function(err, db){
  	var cursor = db.collection('Books').find();
	cursor.each(function(err, doc){
		console.log(doc, i);
	});
  });
// };
