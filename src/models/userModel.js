const connection = require('./connection');

const buscarUsuario = async (info) => { //criando uma funcao assincrona
    const { email, senha } = info; //desestruturando o objeto info
    const [usuario] = await connection.execute('select id_usuario, email, nome FROM usuario WHERE email = ? and senha = SHA2(?, 224)', [email, senha]); //executando a query e armazenando o primeiro array do retorno
    console.log(usuario)
    return usuario; //retornando o usuario
};


const cadastrarUsuario = async (infos) => {
    const {nome, email, senha, telefone} = infos; //desestruturando o objeto infos
    const query = 'INSERT INTO usuario (nome, email, senha, telefone) VALUES (?,?,SHA2(?, 224),?)'; //criando a query
    const values = [nome, email, senha, telefone]; //criando o array de valores
    const [cadastrando] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    const id_user = cadastrando.insertId; //pegando o id do usuário cadastrado
    console.log(id_user)
    return id_user; //retornando o id do usuário cadastrado
};

const cadastrarLista = async (infos) => {
    const {titulo, descricao, tipo, cor_lista, usuario} = infos; //desestruturando o objeto infos
    const query = 'INSERT INTO lista (titulo, descricao, tipo, cor_lista, usuario) VALUES (?,?,?,?,?)'; //criando a query
    const values = [titulo, descricao, tipo, cor_lista, usuario]; //criando o array de valores
    const [cadastrando] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    const id_lista = cadastrando.insertId; //pegando o id da lista cadastrada
    return id_lista; //retornando o id da lista
};

const buscarLista = async (infos) => {
    const {id} = infos; //desestruturando o objeto infos
    const query = 'SELECT * FROM lista WHERE id_lista = ?'; //criando a query
    const values = [id]; //criando o array de valores
    const [lista] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    console.log(lista)
    return lista; //retornando as infos da lista
};

const buscarListas = async () => {
    const query = 'SELECT * FROM lista'; //criando a query
    const [listas] = await connection.execute(query); //executando a query e armazenando o primeiro array do retorno
    console.log(listas)
    return listas; //retornando as infos da lista
};

const buscarListasUsuario = async (infos) => {
    const {id} = infos; //desestruturando o objeto infos
    const query = 'SELECT * FROM lista WHERE usuario = ?'; //criando a query
    const values = [id]; //criando o array de valores
    const [listas] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    console.log(listas)
    return listas; //retornando as infos da lista
};

const cadastrarTarefa = async (infos) => {
    const {titulo, descricao, data_inicio, data_conclusao, flag_conclusao, lista, etapa} = infos; //desestruturando o objeto infos
    const query = 'INSERT INTO tarefa (titulo, descricao, data_inicio, data_conclusao, flag_conclusao, lista, etapa) VALUES (?,?,?,?,?,?,?)'; //criando a query
    const values = [titulo, descricao, data_inicio, data_conclusao, flag_conclusao, lista, etapa]; //criando o array de valores
    const [cadastrando] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    const id_tarefa = cadastrando.insertId; // pegando o id da tarefa cadastrada
    console.log(id_tarefa)
    return id_tarefa; //retornando o id da tarefa
};

const buscarTarefa = async (infos) => {
    const {id} = infos; //desestruturando o objeto infos
    const query = 'SELECT * FROM tarefa WHERE id_tarefa = ?'; //criando a query
    const values = [id]; //criando o array de valores
    const [tarefa] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    console.log(tarefa)
    return tarefa; //retornando as infos da tarefa
}

const buscarTodasTarefasLista = async (infos) => {
    const {id, usuario} = infos; //desestruturando o objeto infos
    console.log(id)
    console.log(usuario)
    const query = ' select t.titulo, t.descricao, t.id_tarefa, etapa, data_inicio, data_conclusao, cor_lista from tarefa as t join lista as l on t.lista = l.id_lista where l.usuario = ? and t.lista = ?'; //criando a query
    const values = [usuario, id]; //criando o array de valores
    const [tarefa] = await connection.execute(query, values); //executando a query e armazenando o primeiro array do retorno
    console.log(tarefa)
    return tarefa; //retornando as infos da tarefa
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
    buscarTodasTarefasLista
}; //exportando funcoes para serem usadas em outros arquivos


