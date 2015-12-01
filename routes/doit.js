var express = require('express');
var router = express.Router();

/* POST doit */
router.post('/', function(req, res, next) {
	console.log ("DoIt: " + JSON.stringify (req.body));
  res.send('Done!');
});

/* GET doit */
router.get('/', function(req, res) {
	console.log ("DoIt: " + JSON.stringify (req.body));
  res.send('Done!');
});

module.exports = router;
