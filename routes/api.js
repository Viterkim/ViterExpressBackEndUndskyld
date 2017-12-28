var express = require('express');
var undskyld = require('../mysql/undskyld');
var submissions = require('../mysql/submissions');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //Flotte instructions til hvordan man bruger apien
  res.render('index', { title: 'Sut Mig' });
});

//Random Undskyldning
router.get('/undskyld', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var undskyldObject = await undskyld.getRandom();
  res.json(undskyldObject);
});

//Alle Sammen
router.get('/undskyld/all', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var undskyldArr = await undskyld.getAll();
  res.json(undskyldArr);
});

//Submissions
router.get('/undskyld/submissions', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var submissionsArr = await submissions.getSubmissions();
  res.json(submissionsArr);
});

//Specific by id
router.get('/:id', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  var undObject = await undskyld.getById(req.params.id);
  res.json(undObject);
});

//Post New
router.post('/undskyld/:foreslag/:navn', async function(req, res, next) {
  res.setHeader('Content-Type', 'application/json');
  await submissions.postNewUndskyldning(req.params.foreslag, req.params.navn);
  res.json({"besked": "Tak for submission!"});
});

module.exports = router;
