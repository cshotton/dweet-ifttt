var express = require('express');
var router = express.Router();
var dweetio = require ("node-dweetio");
var dweetClient = new dweetio ();

/* POST dweet */
router.post('/', function(req, res, next) {
	console.log ("dweet: " + JSON.stringify (req.body));
	dweetClient.dweet_for (req.body.thing, req.body.data, function (err, dweet) {
			console.log ("dweet sent: " + dweet.thing + ", " + dweet.created);
			console.log ("dweet err: " + JSON.stringify (err));
		});
  res.send('Done!');
});

/* GET dweet */
router.get('/', function(req, res) {
	console.log ("dweet: " + JSON.stringify (req.body));
  res.send('Done!');
});

module.exports = router;
