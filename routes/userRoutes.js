var express = require("express");
var router = express.Router();

// for test purpose
// router.get('/', function(req, res){
// 	res.send("User routes api called")
// });

router.get("/get-users", function(req, res){
	res.send("User router called from user Routes");
});

module.exports = router;