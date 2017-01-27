var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  res.send('Request URL:'+req.originalUrl);
  //next();
  res.end();
});

router.get('/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
}, function (req, res, next){
  console.log('Request\'s Params: ',req.params);
  next();
});



router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next route
  if (req.params.id === '0') {next('route'); console.log("skippa lo stack di funzioni e passa all'altro stack")}
  // otherwise pass the control to the next middleware function in this stack
  else next()
}, function (req, res, next) {
  // render a regular page
  res.render('index')
  console.log("non skippa")
})

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log('skippato ed entrato qui')
  res.render('error')
})


/*
//SOLO LA PRIMA GET VIENE ESEGUITA PERCHE:
router.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id);
  next();
}, function (req, res, next) {
  res.send('User Info'); 	//<-SI FERMA QUI
})

// handler for the /user/:id path, which prints the user ID
router.get('/user/:id', function (req, res, next) {
  res.end(req.params.id);
})
*/

module.exports = router;