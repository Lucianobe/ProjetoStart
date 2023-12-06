const connection = require('./connection');

// Função para buscar elementos na tabela
const getAllItems4 = async () => {
    try {
        const [query] = await connection.execute('SELECT * FROM banco_ong.cv_cadastro_voluntario_agendamento');
        return query;
    } catch (error) {
        throw new Error(`Erro ao buscar itens: ${error.message}`);
    }
};


// Função para inserir elementos na tabela
const insertItem4 = async (Nome4, Email4, Telefone4, Modalidade, Endereco4, Hora4) => {
    try {
        const insertQuery = 'INSERT INTO cv_cadastro_voluntario_agendamento(Nome4, Email4, Telefone4, Modalidade, Endereco4, Hora4) VALUES (?, ?, ?, ?, ?, ?, NOW())';
        const values = [Nome4, Email4, Telefone4, Modalidade, Endereco4, Hora4];

        const [result] = await connection.execute(insertQuery, values);
        return result;
    } catch (error) {
        throw new Error(`Erro ao inserir item: ${error.message}`);
    };
}

module.exports = getAllItems4, insertItem4