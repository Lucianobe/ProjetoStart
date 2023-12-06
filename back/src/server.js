const express = require('./../node_modules/express');
const cors = require('./../node_modules/cors'); // Importe o pacote cors
const connection = require('./connection');
const allItems = require('./allItems');
const allItems2 = require('./allItems2');
const allItems3 = require('./allItems3');
const allItems4 = require('./allItems4');

const App = express();

App.use(express.json());
App.use(cors()); // Adicione o middleware de CORS antes das suas rotas

const PORT = 3003;

App.listen(PORT, () => {
    console.log(`Funcionando na porta ${PORT}`);
});

App.get('/', async (req, res) => {
    const query = await allItems();
    return res.status(201).json(query);
});

App.get('/', async (req, res) => {
    const query = await allItems2();
    return res.status(201).json(query);
});

App.get('/', async (req, res) => {
    const query = await allItems3();
    return res.status(201).json(query);
});

App.get('/', async (req, res) => {
    const query = await allItems4();
    return res.status(201).json(query);
});

App.post("/insertItem", (req, res) => {

    const { Cnpj, Nome, Razao, Data_abertura, Sobre, Telefone, Whats, Endereco, Email, Senha } = req.body

    let SQL = 'INSERT INTO in_insti(IN_CNPJ, IN_NOME_INSTITUICAO, IN_RAZAO_SOCIAL, IN_DATA_CRIADA, IN_SOBRE, CA_TELEFONE, CA_WHATS, CA_DATACADASTRO, CA_ENDERECO, CA_EMAIL, CA_SENHA) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?, ?)';

    connection.query(SQL, [Cnpj, Nome, Razao, Data_abertura, Sobre, Telefone, Whats, Endereco, Email, Senha], (err, result) => {
        console.log(err)
    })

})

App.post("/insertItem2", (req, res) => {
    const { cpf2, Nome2, Genero2, Data_nascimento2, Telefone2, Whats2, Endereco2, Email2, Senha2 } = req.body

    let SQL = 'INSERT INTO pes_pessoa_fisica(CA_CPF, CA_NOME, CA_GENERO, CA_DATA_NASCIMENTO, CA_TELEFONE, CA_WHATS, CA_ENDERECO, CA_DATACADASTRO, CA_EMAIL, CA_SENHA) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)';

    connection.query(SQL, [cpf2, Nome2, Genero2, Data_nascimento2, Telefone2, Whats2, Endereco2, Email2, Senha2], (err, result) => {
        console.log(err)
    })

})

App.post("/insertItem3", (req, res) => {
    const { Cpf3, Nome3, Genero3, Data_nascimento3, Telefone3, Whats3, Endereco3, Certificacao, Disponibilidade, Turno, Email3, Senha3 } = req.body

    let SQL = 'INSERT INTO vo_voluntario(VO_CPF, VO_NOME, VO_GENERO, VO_DATA_NASCIMENTO, VO_TELEFONE, VO_WHATS, VO_ENDERECO, VO_CERTIFICACAO, VO_DISPONIBILIDADE, VO_TURNO, VO_DATACADASTRO, VO_EMAIL, VO_SENHA) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)';

    connection.query(SQL, [Cpf3, Nome3, Genero3, Data_nascimento3, Telefone3, Whats3, Endereco3, Certificacao, Disponibilidade, Turno, Email3, Senha3], (err, result) => {
        console.log(err)
    })

})

App.post("/insertItem4", (req, res) => {
    const { Nome4, Email4, Telefone4, Modalidade, Endereco4, Hora4 } = req.body

    let SQL = 'INSERT INTO cv_cadastro_voluntario_agendamento(CV_NOME, CV_EMAIL, CV_CONTATO, CV_MODADILIDADE, CV_ENDERECO, CV_HORA, CV_DATACADASTRO) VALUES (?, ?, ?, ?, ?, ?, NOW())';

    connection.query(SQL, [Nome4, Email4, Telefone4, Modalidade, Endereco4, Hora4], (err, result) => {
        console.log(err)
    })

})