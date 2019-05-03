var express = require("express");
var app = express();
var bodyParser = require("body-parser");

var api = require("./route");
var mongo = require("./common/dbConfig")

var port = process.env.PORT || 3000;

app.use('/api', api);

app.listen(port, function () {
	console.log("running on port " + port);
});