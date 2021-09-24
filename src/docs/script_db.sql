create database novoanjo
DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

use novoanjo;

create table usuario(
id_usuario bigint not null auto_increment,
nome varchar(70) not null,
sexo enum('M','F') not null,
nascimento date not null,
perfil char(1) not null,
email varchar(100) not null unique,
senha varchar(100) not null,
criacao DATETIME not null default CURRENT_TIMESTAMP,
PRIMARY KEY (id_usuario)
)default charset = utf8;

create table instituicao(
id_instituicao bigint not null auto_increment,
nome varchar(50) not null,
fundacao date not null,
descricao varchar(200) not null,
liberado enum('S','N') not null,
id_usuario bigint not null,
criacao DATETIME not null default CURRENT_TIMESTAMP,
PRIMARY KEY (id_instituicao)
)default charset = utf8;

create table evento(
id_evento bigint not null auto_increment,
responsavel varchar(70) not null,
data_evento timestamp not null,
descricao varchar(255) not null,
status enum('A', 'P') not null,
id_telefone bigint not null,
id_endereco bigint not null,
criacao DATETIME not null default CURRENT_TIMESTAMP,
PRIMARY KEY (id_evento)
)default charset = utf8;

create table endereco(
id_endereco bigint not null auto_increment,
estado char(2) not null,
cidade int not null,
cep bigint not null,
logradouro varchar(100) not null,
numero int not null,
complemento varchar(100),
id_usuario bigint unique,
id_instituicao bigint unique,
id_evento bigint unique,
PRIMARY KEY (id_endereco)
)default charset = utf8;

create table telefone(
id_telefone bigint not null auto_increment,
ddd int not null ,
numero bigint not null,
id_usuario bigint,
id_instituicao bigint,
id_evento bigint,
PRIMARY KEY (id_telefone)
)default charset = utf8;

create table servico(
id_servico bigint not null auto_increment,
nome varchar(70) not null ,
PRIMARY KEY (id_servico)
)default charset = utf8;

create table servico_usuario_instituacao(
id_servico_usuario_instituacao bigint not null auto_increment,
id_servico bigint not null,
id_usuario bigint,
id_instituicao bigint,
PRIMARY KEY (id_servico_usuario_instituacao)
)default charset = utf8;


create table mensagem(
id_mensagem bigint not null auto_increment,
texto varchar(200) not null,
data_fim date not null,
id_usuario_criacao bigint,
id_instituicao_criacao bigint,
id_usuario_responsavel bigint,
id_instituicao_responsavel bigint,
id_servico bigint,
criacao DATETIME not null default CURRENT_TIMESTAMP,
PRIMARY KEY (id_mensagem)
)default charset = utf8;


ALTER TABLE usuario ENGINE=INNODB;
ALTER TABLE instituicao ENGINE=INNODB;
ALTER TABLE servico ENGINE=INNODB;
ALTER TABLE servico_usuario_instituacao ENGINE=INNODB;
ALTER TABLE evento ENGINE=INNODB;
ALTER TABLE endereco ENGINE=INNODB;
ALTER TABLE telefone ENGINE=INNODB;
ALTER TABLE servico ENGINE=INNODB;
ALTER TABLE mensagem ENGINE=INNODB;

-- CONSTRANTE

ALTER TABLE servico_usuario_instituacao ADD CONSTRAINT id_fk_servico_servico_usuario_instituacao FOREIGN KEY(id_servico) REFERENCES servico(id_servico);
ALTER TABLE servico_usuario_instituacao ADD CONSTRAINT id_fk_usuario_servico FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario);
ALTER TABLE servico_usuario_instituacao ADD CONSTRAINT id_fk_instituicao_servico FOREIGN KEY(id_instituicao) REFERENCES instituicao(id_instituicao);
ALTER TABLE instituicao ADD CONSTRAINT id_fk_usuario_instituicao FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario);
ALTER TABLE evento ADD CONSTRAINT id_fk_telefone_evento FOREIGN KEY(id_telefone) REFERENCES telefone(id_telefone);
ALTER TABLE evento ADD CONSTRAINT id_fk_endereco_evento FOREIGN KEY(id_endereco) REFERENCES endereco(id_endereco);
ALTER TABLE endereco ADD CONSTRAINT id_fk_usuario_endereco FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario);
ALTER TABLE endereco ADD CONSTRAINT id_fk_instituicao_endereco FOREIGN KEY(id_instituicao) REFERENCES instituicao(id_instituicao);
ALTER TABLE telefone ADD CONSTRAINT id_fk_usuario_telefone FOREIGN KEY(id_usuario) REFERENCES usuario(id_usuario);
ALTER TABLE telefone ADD CONSTRAINT id_fk_instituicao_telefone FOREIGN KEY(id_instituicao) REFERENCES instituicao(id_instituicao);
ALTER TABLE telefone ADD CONSTRAINT id_fk_evento_telefone FOREIGN KEY(id_evento) REFERENCES evento(id_evento);

-- INSERT

INSERT INTO novoanjo.servico
(nome)
VALUES('MANTIMENTOS');
INSERT INTO novoanjo.servico
(nome)
VALUES('TEMPO');
INSERT INTO novoanjo.servico
(nome)
VALUES('ROUPAS E AGASALHOS');
INSERT INTO novoanjo.servico
(nome)
VALUES('CURSO INFORMATICA');
INSERT INTO novoanjo.servico
(nome)
VALUES('ATENDIMENTO MEDICO');
INSERT INTO novoanjo.servico
(nome)
VALUES('ATENDIMENTO PSICOLÓGICO');
