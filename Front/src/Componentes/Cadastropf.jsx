import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cadastropf = () => {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Cadastro Pessoa Física';

        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
            document.title = 'Título Padrão';
        };
    }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    const [Cpf2, setCpf2] = useState('');
    const [Nome2, setNome2] = useState('');
    const [Data_nascimento2, setData_nascimento2] = useState('');
    const [Telefone2, setTelefone2] = useState('');
    const [Whats2, setWhats2] = useState('default');
    const [Genero2, setGenero2] = useState('default');
    const [Endereco2, setEndereco2] = useState('');
    const [Email2, setEmail2] = useState('');
    const [Senha2, setSenha2] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3003/insertItem2', {
                Cpf2,
                Nome2, Data_nascimento2, Telefone2, Whats2, Genero2, Endereco2, Email2, Senha2
            });

            // Atualiza a lista após a inserção
            const response = await axios.get('http://localhost:3003');
            setDados(response.data);

            // Limpa os campos do formulário
            setCpf2('');
            setNome2('');
            setData_nascimento2('');
            setTelefone2('');
            setWhats2('');
            setGenero2('');
            setEndereco2('');
            setEmail2('');
            setSenha2('');

        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        }
    };

    return (

        <>
            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 formulario2">

                    <h5 className="text-sm-center">Cadastre-se como <span style={{ color: '#0B5DDE' }}>Pessoa Física</span></h5>

                    <form onSubmit={handleSubmit}>
                        <section className="dadosimp">
                            <div className="col-12 mw-100 justify-content-start d-sm-flex infor">
                                <div className="col-4">
                                    <label htmlFor="Cpf2" className="col-sm-2 col-form-label">
                                        CPF:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        maxLength={14}
                                        minLength={14}
                                        name="Cpf2"
                                        id="Cpf2"
                                        placeholder="000.000.000-00"
                                        pattern="(\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{11})"
                                        title="Digite o cpf corretamente!"
                                        required=""
                                        defaultValue={Cpf2}
                                        onChange={(e) => setCpf2(e.target.value)}
                                    />
                                </div>
                                <div className="col-7">
                                    <label htmlFor="Nome2" className="col-sm-3 col-form-label">
                                        Nome:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        minLength={4}
                                        name="Nome2"
                                        id="Nome2"
                                        pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
                                        required=""
                                        defaultValue={Nome2}
                                        onChange={(e) => setNome2(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mw-100 d-sm-flex infor">
                                <div className="col-4">
                                    <label
                                        htmlFor="Data_nascimento2"
                                        className="col-sm-12 col-form-label"
                                    >
                                        Data Nascimento:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="Data_nascimento2"
                                        id="Data_nascimento2"
                                        required=""
                                        defaultValue={Data_nascimento2}
                                        onChange={(e) => setData_nascimento2(e.target.value)}
                                    />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="Telefone2" className="col-sm-3 col-form-label">
                                        {" "}
                                        Telefone:{" "}
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        maxLength={13}
                                        name="Telefone2"
                                        id="Telefone2"
                                        placeholder="11-99999-9999"
                                        pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                                        required=""
                                        defaultValue={Telefone2}
                                        onChange={(e) => setTelefone2(e.target.value)}
                                    />
                                </div>
                                <div className="col-2">
                                    <label className="col-sm-3 col-form-label" htmlFor="Whats2">
                                        Whatsapp:
                                    </label>

                                    <select className="form-control" onChange={(e) => setWhats2(e.target.value)} id="Whats2" name="Whats2" defaultValue={Whats2} >
                                        <option value="default" disabled>
                                            Escolha...
                                        </option>
                                        <option defaultValue='Sim'>Sim</option>
                                        <option defaultValue='Não'>Não</option>
                                    </select>
                                </div>
                                
                                <div className="col-2">
                                    <label className="col-sm-3 col-form-label genero" htmlFor="Genero2">
                                        Sexo:
                                    </label>
                                    <select className="form-control" id="Genero2" name="Genero2" onChange={(e) => setGenero2(e.target.value)} defaultValue={Genero2} >
                                        <option value="default" disabled>
                                            Escolha...
                                        </option>
                                        <option defaultValue="Masculino">Masculino</option>
                                        <option defaultValue="Feminino">Feminino</option>
                                        <option defaultValue="Outro">Outro</option>
                                    </select>
                                </div>

                            </div>

                            <div className="col-12 mw-100 d-sm-flex infor">
                                <div className="col-9">
                                    <label htmlFor="Endereco2" className="col-sm-4 col-form-label">
                                        {" "}
                                        Endereço:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="Endereco2"
                                        id="Endereco2"
                                        required=""
                                        defaultValue={Endereco2}
                                        onChange={(e) => setEndereco2(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mw-100 d-sm-flex login">
                                <div className="col-6">
                                    <label htmlFor="Email2" className="col-sm-3 col-form-label">
                                        Email:{" "}
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="Email2"
                                        id="Email2"
                                        required=""
                                        defaultValue={Email2}
                                        onChange={(e) => setEmail2(e.target.value)}
                                    />
                                </div>
                                <div className="col-5">
                                    <label htmlFor="Senha2" className="col-sm-3 col-form-label">
                                        Senha:{" "}
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="Senha2"
                                        id="Senha2"
                                        required=""
                                        defaultValue={Senha2}
                                        onChange={(e) => setSenha2(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>
                        <div className="col-12  termos">
                            <div className="col-12 mw-100 justify-content-center d-sm-flex infor8">
                                <input
                                    type="checkbox"
                                    id="terms.usage"
                                    className="input inputCheckBox"
                                    required=""
                                />
                                <a target="__blank" className="d-sm-flex" href="https://online.fliphtml5.com/fluow/jtdv/#p=1">
                                    Termos de uso de imagem e som
                                </a>
                            </div>
                        </div>
                        <div className="col-12 mw-100 justify-content-center d-sm-flex botoes">
                            <button
                                className="btn btn-primary btn1"
                                type="submit"
                                name="submit"
                                id="submit"
                            >Cadastrar</button>
                        </div>
                    </form>
                </div>
                <div className="col-2"></div>
            </div>
        </>
    )
}

export default Cadastropf