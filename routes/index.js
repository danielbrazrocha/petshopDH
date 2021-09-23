var express = require('express');
var router = express.Router();
var ContatoController = require('../controllers/ContatoController');
var LoginController = require('../controllers/LoginController');
var CadastroController = require('../controllers/CadastroController');
var ServicosController = require('../controllers/ServicosController');
var SobreController = require('../controllers/SobreController');

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

// View Servicos
router.get('/servicos', ServicosController.index);

// View Sobre
router.get('/sobre', SobreController.index);



module.exports = router;
