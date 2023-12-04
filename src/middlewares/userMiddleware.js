const { request } = require("../app");

const validateBody = (request, response, next) => {
    const {body} = request;

    //validando o body
    // campos: nome, email, senha, telefone

    if(body.nome == '' || body.nome == undefined || body.nome == null){
        return response.status(400).json({message: "O campo nome é obrigatório!"})
    }

    if(body.email == '' || body.email == undefined || body.email == null){
        return response.status(400).json({message: "O campo email é obrigatório!"})
    }

    if(body.senha == '' || body.senha == undefined || body.senha == null){
        return response.status(400).json({message: "O campo senha é obrigatório!"})
    }

    if(body.telefone == '' || body.telefone == undefined || body.telefone == null){
        return response.status(400).json({message: "O campo telefone é obrigatório!"})
    }


    if(body.nome.length < 2){
        return response.status(400).json({message: "O campo nome deve ter no mínimo 2 caracteres!"})
    }

    if(body.senha.length < 8){
        return response.status(400).json({message: "O campo senha deve ter no mínimo 8 caracteres!"})
    }    

    next();
};


const validateListBody = (request , response, next) => {
    // titulo, descricao (pode ser nula), tipo, usuario
    const {body} = request;
    // validando o body
    if(body.titulo == '' || body.titulo == undefined || body.titulo == null){
        return response.status(400).json({message: "O campo titulo é obrigatório!"})
    }

    if(body.tipo == '' || body.tipo == undefined || body.tipo == null){
        return response.status(400).json({message: "O campo tipo é obrigatório!"})
    }

    if(body.usuario == '' || body.usuario == undefined || body.usuario == null){
        return response.status(400).json({message: "O campo usuario é obrigatório!"})
    }

    next();

};

const validateTaskBody = (request , response, next) => {
    const {body} = request;
    // validando o body
    if(body.titulo == '' || body.titulo == undefined || body.titulo == null){
        return response.status(400).json({message: "O campo titulo é obrigatório!"})
    }

    if(body.data_inicio == '' || body.data_inicio == undefined || body.data_inicio == null){
        return response.status(400).json({message: "O campo data_inicio é obrigatório!"})
    }

    if(body.flag_conclusao == '' || body.flag_conclusao == undefined || body.flag_conclusao == null){
        return response.status(400).json({message: "O campo flag_conclusao é obrigatório!"})
    }

    if(body.lista == '' || body.lista == undefined || body.lista == null){
        return response.status(400).json({message: "O campo lista é obrigatório!"})
    }

    if(body.etapa == '' || body.etapa == undefined || body.etapa == null){
        return response.status(400).json({message: "O campo etapa é obrigatório!"})
    }

    next();
};



module.exports = {
    validateBody,
    validateListBody,
    validateTaskBody
};
