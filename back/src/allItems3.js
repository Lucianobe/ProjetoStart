const connection = require('./connection');

// Função para buscar elementos na tabela
const getAllItems3 = async () => {
    try {
        const [query] = await connection.execute('SELECT * FROM banco_ong.vo_voluntario');
        return query;
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`);
    }
};

// Função para inserir elementos na tabela
const insertItem3 = async (Cpf3, Nome3, Genero3, Data_nascimento3, Telefone3, Whats3, Endereco3, Certificacao, Disponibilidade, Turno, Email3, Senha3) => {
    try {
        const insertQuery = 'INSERT INTO vo_voluntario(Cpf3, Nome3, Genero3, Data_nascimento3, Telefone3, Whats3, Endereco3, Certificacao, Disponibilidade, Turno, Email3, Senha3) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, NOW(), ?, ?)';
        const values = [Cpf3, Nome3, Genero3, Data_nascimento3, Telefone3, Whats3, Endereco3, Certificacao, Disponibilidade, Turno, Email3, Senha3];

        const [result] = await connection.execute(insertQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao inserir item: ${error.message}`);
    };
}

module.exports = getAllItems3, insertItem3