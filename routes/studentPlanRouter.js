var express = require('express');
var router = express.Router();

var authController = require('../controllers/auth');
var dataController = require('../controllers/data');

// Retrieve student schedule
router.get('/', authController.isAuthenticated, function(req, res, next) {

	 dataController.getStudentPlan(req.body.userid, function(err, data)
	 {
	 if (err) {
	 console.log(err);
	 /// / Do something with the error
	 } else {
	 res.json(data);
	 }
	 });
});

module.exports = router;
