var express = require('express');
var router = express.Router();
var ContatoController = require('../controllers/ContatoController');
var LoginController = require('../controllers/LoginController');
var CadastroController = require('../controllers/CadastroController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// View Contato
router.get('/contato', ContatoController.index);

// View Login
router.get('/login', LoginController.index);

// View Cadastro
router.get('/cadastro', CadastroController.index);

module.exports = router;
