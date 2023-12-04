const userModel = require('../models/userModel');

const buscarUsuario = async (request, response) => {
    const users = await userModel.buscarUsuario(request.body);
    return response.status(200).json(users);
};

const cadastrarUsuario = async (request, response) => {
    const cadastrando = await userModel.cadastrarUsuario(request.body);
    return response.status(200).json(cadastrando);
};

const cadastrarLista = async (request, response) => {
    const cadastrando = await userModel.cadastrarLista(request.body);
    return response.status(200).json(cadastrando);
};

const buscarLista = async (request, response) => {
    const lista = await userModel.buscarLista(request.params);
    return response.status(200).json(lista);
};

const buscarListas = async (request, response) => {
    const listas = await userModel.buscarListas();
    return response.status(200).json(listas);
};

const buscarListasUsuario = async (request, response) => {
    const listas = await userModel.buscarListasUsuario(request.params);
    return response.status(200).json(listas);
}

const cadastrarTarefa = async (request, response) => {
    const tarefa = await userModel.cadastrarTarefa(request.body);
    return response.status(200).json(tarefa);
};

const buscarTarefa = async (request, response) => {
    const tarefa = await userModel.buscarTarefa(request.params);
    return response.status(200).json(tarefa);
}

const buscarTodasTarefasLista = async (request, response) => {
    const tarefa = await userModel.buscarTodasTarefasLista(request.params);
    return response.status(200).json(tarefa);
}

module.exports = {
    buscarUsuario,
    cadastrarUsuario,
    cadastrarLista,
    buscarLista,
    buscarListas,
    buscarListasUsuario,
    cadastrarTarefa,
    buscarTarefa,
    buscarTodasTarefasLista,
};

