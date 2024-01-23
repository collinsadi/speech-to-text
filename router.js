var express = require('express');
var router = express.Router();
var gtts = require('node-gtts')('en');

router.get('/speech', function(req, res) {
  res.set({'Content-Type': 'audio/mpeg'});
  gtts.stream(req.query.text).pipe(res);
})


module.exports = router;