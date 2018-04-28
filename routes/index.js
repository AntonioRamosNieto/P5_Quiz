var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controller');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/credits', function(req, res, next) {
    res.render('credits');
});

router.param('quizId', quizController.load);

router.get('/quizzes', quizController.index);

module.exports = router;
