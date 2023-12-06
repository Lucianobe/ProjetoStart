const connection = require('./connection');

// Função para buscar elementos na tabela
const getAllItems = async () => {
    try {
        const [query] = await connection.execute('SELECT * FROM banco_ong.in_insti');
         return query;
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`);
    }
};

// Função para inserir elementos na tabela
const insertItem = async (Cnpj, Nome, Razao, Data_abertura, Sobre, Telefone, Whats, Endereco, Email, Senha) => {
    try {
        const insertQuery = 'INSERT INTO in_insti(Cnpj, Nome, Razao, Data_abertura, Sobre, Telefone, Whats, Endereco, Email, Senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';
        const values = [Cnpj, Nome, Razao, Data_abertura, Sobre, Telefone, Whats, Endereco, Email, Senha];

        const [result] = await connection.execute(insertQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao inserir item: ${error.message}`);
    };

}

module.exports = getAllItems, insertItem