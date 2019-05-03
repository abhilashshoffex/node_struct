var express = require("express");
var router = express.Router();

var userRoute = require("./routes/userRoutes")

// for test purpose
// router.get('/', function(req, res){
// 	res.send("Main route API called")
// });

router.use('/user', userRoute);

//export this router to use in our index.js
module.exports = router;