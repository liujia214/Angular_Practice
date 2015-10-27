var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Angular Practice' });
});
router.get('/info',function(req,res){
  res.status(200).json({message:'Answer4-----get information before angular bootstrap'});
});
module.exports = router;
