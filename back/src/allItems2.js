const connection = require('./connection');

// Função para buscar elementos na tabela
const getAllItems2 = async () => {
    try {
        const [query] = await connection.execute('SELECT * FROM banco_ong.pes_pessoa_fisica');
        return query;
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`);
    }
};

// Função para inserir elementos na tabela
const insertItem2 = async (Cpf2, Nome2, Data_nascimento2, Telefone2, Whats2, Genero2, Endereco2, Email2, Senha2) => {
    try {
        const insertQuery = 'INSERT INTO pes_pessoa_fisica(Cpf2, Nome2, Data_nascimento2, Telefone2, Whats2, Genero2, Endereco2, Email2, Senha2) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [Cpf2, Nome2, Data_nascimento2, Telefone2, Whats2, Genero2, Endereco2, Email2, Senha2];

        const [result] = await connection.execute(insertQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao inserir item: ${error.message}`);
    };
}

module.exports = getAllItems2, insertItem2