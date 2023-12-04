const express = require('express'); //chamando o express

const userController = require('./controllers/userController'); //chamando o controller de usuário
const userMiddleware = require('./middlewares/userMiddleware'); //chamando o middleware de usuário
const { route } = require('./app');

const router = express.Router(); //instanciando o router

router.post('/users/login', userController.buscarUsuario); // executando funcao buscarUsuarios do controller de usuário
router.post('/users', userMiddleware.validateBody ,userController.cadastrarUsuario); // executando funcao  cadastrarUsuario do controller de usuário
router.post('/lista/criar', userMiddleware.validateListBody , userController.cadastrarLista); // executando funcao  cadastrarLista do controller de usuário
router.get('/lista/:id', userController.buscarLista); // executando funcao  buscarLista do controller de usuário
router.get('/lista', userController.buscarListas); // executando funcao  buscarLista do controller de usuário
router.post('/lista/user/:id', userController.buscarListasUsuario); // executando funcao  buscarLista do controller de usuário
router.post('/tarefa/criar', userController.cadastrarTarefa); // executando funcao  cadastrarTarefa do controller de usuário
router.post('/tarefa/:id', userController.buscarTarefa); // executando funcao  buscarTarefa do controller de usuário
router.post('/tarefa/lista/:id/:usuario', userController.buscarTodasTarefasLista); // executando funcao  buscarTodasTarefasLista do controller de usuário

module.exports = router; //exportando o router para ser usado em outro arquivo