DROP DATABASE cosmos;
CREATE DATABASE cosmos;
USE cosmos;

-- Tabela de usuario
CREATE TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    senha VARCHAR(255) NOT NULL,
    telefone VARCHAR(15)
);

-- Tabela de lista
CREATE TABLE lista(
    id_lista INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    tipo VARCHAR(255) NOT NULL,
    usuario INT,
    FOREIGN KEY (usuario) REFERENCES usuario(id_usuario)
);

-- Tabela de etapa
CREATE TABLE etapa(
    id_etapa INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL
);

-- Tabela de tarefa
CREATE TABLE tarefa(
    id_tarefa INT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao VARCHAR(255) NOT NULL,
    data_inicio DATETIME NOT NULL,
    data_conclusao DATETIME,
    flag_conclusao BOOLEAN,
    lista INT,
    etapa INT,
    FOREIGN KEY (lista) REFERENCES lista(id_lista),
    FOREIGN KEY (etapa) REFERENCES etapa(id_etapa)
);


INSERT INTO etapa (titulo, descricao) VALUES 
('Iniciar', 'Etapa inicial do projeto ou tarefa'),
('Em andamento', 'Tarefa ou projeto atualmente em progresso'),
('Concluída', 'Tarefa ou projeto foi concluído com sucesso'),
('Cancelada', 'Tarefa ou projeto foi cancelado antes da conclusão');
