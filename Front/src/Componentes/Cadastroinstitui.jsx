import React, { useState, useEffect } from 'react';
import axios from 'axios';


const Cadastroinstitui = () => {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Cadastro Instituição';

        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
            document.title = 'Título Padrão';
        };
    }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    const [Cnpj, setCnpj] = useState('');
    const [Nome, setNome] = useState('');
    const [Razao, setRazao] = useState('');
    const [Data_abertura, setData_abertura] = useState('');
    const [Sobre, setSobre] = useState('');
    const [Telefone, setTelefone] = useState('');
    const [Whats, setWhats] = useState('default');
    const [Endereco, setEndereco] = useState('');
    const [Email, setEmail] = useState('');
    const [Senha, setSenha] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3003/insertItem', {
                Cnpj,
                Nome, Razao, Data_abertura, Sobre, Telefone, Whats, Endereco, Email, Senha
            });

            // Atualiza a lista após a inserção
            const response = await axios.get('http://localhost:3003');
            setDados(response.data);

            // Limpa os campos do formulário
            setCnpj('');
            setNome('');
            setRazao('');
            setData_abertura('');
            setSobre('');
            setTelefone('');
            setWhats('');
            setEndereco('');
            setEmail('');
            setSenha('');

        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        }
    };

    return (
        <>
            <div className="row">
            <div className="col-2"></div>
                <div className="col-8 formulario2">

                    <h5 className="text-sm-center">Cadastre-se como <span style={{ color: '#0B5DDE' }}>Instituição</span></h5>

                    <form onSubmit={handleSubmit}>

                        <div className="dadosimp">
                            <div className="col-12 mw-100 d-md-flex infor">

                                <div className="col-3">
                                    <label htmlFor="Cnpj" className="col-sm-2 col-form-label">
                                        CNPJ:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        maxLength={18}
                                        minLength={16}
                                        name="Cnpj"
                                        id="Cnpj"
                                        placeholder="00.000.000./0000-00"
                                        pattern="(\d{2}\.\d{3}\.\d{3}/\d{4})-\(\d{11})"
                                        title="Digite o cpf corretamente!"
                                        required=""
                                        defaultValue={Cnpj}
                                        onChange={(e) => setCnpj(e.target.value)}
                                    />
                                </div>

                                <div className="col-5">
                                    <label htmlFor="Nome" className="col-sm-3 col-form-label">
                                        Nome:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        minLength={4}
                                        name="Nome"
                                        id="Nome"
                                        pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
                                        required=""
                                        defaultValue={Nome}
                                        onChange={(e) => setNome(e.target.value)}
                                    />
                                </div>

                                <div className="col-12 mw-100 d-md-flex infor">
                                    <div className="col-3">
                                        <label htmlFor="Razao" className="col-md-12 col-form-label">
                                            Razão Social:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            minLength={4}
                                            name="Razao"
                                            id="Razao"
                                            pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
                                            required=""
                                            defaultValue={Razao}
                                            onChange={(e) => setRazao(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 mw-100 d-sm-flex infor">
                                <div className="col-3">
                                    <label htmlFor="Data_abertura" className="col-md-12 col-form-label">
                                        Data abertura:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="Data_abertura"
                                        id="Data_abertura"
                                        required=""
                                        defaultValue={Data_abertura}
                                        onChange={(e) => setData_abertura(e.target.value)}
                                    />
                                </div>

                                <div className="col-2">
                                    <label className="col-md-3 col-form-label" htmlFor="Whats">
                                        Whatsapp:
                                    </label>

                                    <select className="form-control" onChange={(e) => setWhats(e.target.value)} id="Whats" name="Whats" defaultValue={Whats} >
                                        <option value="default" disabled>
                                            Escolha...
                                        </option>
                                        <option defaultValue='Sim'>Sim</option>
                                        <option defaultValue='Não'>Não</option>
                                    </select>
                                </div>

                                <div className="col-12 mw-100 d-sm-flex infor">
                                    <div className="col-6">
                                        <label htmlFor="Endereco" className="col-sm-4 col-form-label">
                                            {" "}
                                            Endereço:
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="Endereco"
                                            id="Endereco"
                                            required=""
                                            defaultValue={Endereco}
                                            onChange={(e) => setEndereco(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>



                            <div className="col-12 mw-100  d-sm-flex">
                                <div className="col-11">
                                    <label htmlFor="Sobre" className="col-sm-3 col-form-label">
                                        Sobre:
                                    </label>
                                    <textarea
                                        className="form-control"
                                        name="Sobre"
                                        id="Sobre"
                                        rows={3}
                                        defaultValue={Sobre}
                                        onChange={(e) => setSobre(e.target.value)}
                                    />
                                </div>
                            </div>

                            <div className="col-12 mw-100 d-sm-flex login">
                                <div className="col-6">
                                    <label htmlFor="Email" className="col-sm-5 col-form-label">
                                        Email:{" "}
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="Email"
                                        id="Email"
                                        required=""
                                        defaultValue={Email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="col-5">
                                    <label htmlFor="Senha" className="col-sm-5 col-form-label">
                                        Senha:{" "}
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        name="Senha"
                                        id="Senha"
                                        required=""
                                        defaultValue={Senha}
                                        onChange={(e) => setSenha(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-12 mw-100 justify-content-center d-sm-flex termos">
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

                        <div className="bCadastrar">
                            <div className="col-12 mw-100 justify-content-center d-sm-flex botoes">
                                <button
                                    className="btn btn-primary btn1"
                                    type="submit"
                                    name="submit"
                                    id="submit"
                                >Cadastrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>



        </>

    )
}

export default Cadastroinstitui