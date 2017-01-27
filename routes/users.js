var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
  console.log('Request Type: ', req.method);
});

router.get('/:id', function(req, res, next){
  console.log('Passed params: ', req.params);
  //res.end('Risposta');
  console.log(next);
  next();
});
module.exports = router;
