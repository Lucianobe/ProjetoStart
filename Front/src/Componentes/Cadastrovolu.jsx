import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Cadastrovolu = () => {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Cadastro Voluntario';

        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
            document.title = 'Título Padrão';
        };
    }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    const [Cpf3, setCpf3] = useState('');
    const [Nome3, setNome3] = useState('');
    const [Genero3, setGenero3] = useState('default');
    const [Data_nascimento3, setData_nascimento3] = useState('');
    const [Telefone3, setTelefone3] = useState('');
    const [Whats3, setWhats3] = useState('default');
    const [Endereco3, setEndereco3] = useState('');
    const [Certificacao, setCertificacao] = useState('');
    const [Disponibilidade, setDisponibilidade] = useState('');
    const [Turno, setTurno] = useState('');
    const [Email3, setEmail3] = useState('');
    const [Senha3, setSenha3] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            await axios.post('http://localhost:3003/insertItem3', {
                Cpf3,
                Nome3, Genero3, Data_nascimento3, Telefone3, Whats3, Endereco3, Certificacao, Disponibilidade, Turno, Email3, Senha3
            });


            // Atualiza a lista após a inserção
            const response = await axios.get('http://localhost:3003');
            setDados(response.data);

            // Limpa os campos do formulário
            setCpf3('');
            setNome3('');
            setGenero3('');
            setData_nascimento3('');
            setTelefone3('');
            setWhats3('');
            setEndereco3('');
            setCertificacao('');
            setDisponibilidade('');
            setTurno('');
            setEmail3('');
            setSenha3('');

        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        }
    };

    return (

        <>

            <div className="row">
                <div className="col-2"></div>
                <div className="col-8 formulario1">

                    <h5 className="text-sm-center">Cadastre-se como <span style={{ color: '#0B5DDE' }}>Voluntário</span></h5>

                    <form onSubmit={handleSubmit}>
                        <section className="dadosimp">
                            <div className="col-12 mw-100 d-sm-flex infor">
                                <div className="col-3">
                                    <label htmlFor="Cpf3" className="col-sm-2 col-form-label">
                                        CPF:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        maxLength={14}
                                        minLength={14}
                                        name="Cpf3"
                                        id="Cpf3"
                                        placeholder="000.000.000-00"
                                        pattern="(\d{3}\.\d{3}\.\d{3}-\d{2})|(\d{11})"
                                        title="Digite o cpf corretamente!"
                                        required=""
                                        defaultValue={Cpf3}
                                        onChange={(e) => setCpf3(e.target.value)}
                                    />
                                </div>
                                <div className="col-8">
                                    <label htmlFor="Nome3" className="col-sm-3 col-form-label">
                                        Nome:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        minLength={4}
                                        name="Nome3"
                                        id="Nome3"
                                        pattern="^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+"
                                        required=""
                                        defaultValue={Nome3}
                                        onChange={(e) => setNome3(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="col-12 mw-100 d-sm-flex infor">
                                <div className="col-4">
                                    <label
                                        htmlFor="Data_nascimento3"
                                        className="col-sm-12 col-form-label"
                                    >
                                        Data Nascimento:
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control"
                                        name="Data_nascimento3"
                                        id="Data_nascimento3"
                                        required=""
                                        defaultValue={Data_nascimento3}
                                        onChange={(e) => setData_nascimento3(e.target.value)}
                                    />
                                </div>
                                <div className="col-2">
                                    <label htmlFor="Telefone3" className="col-sm-3 col-form-label">
                                        {" "}
                                        Telefone:{" "}
                                    </label>
                                    <input
                                        type="tel"
                                        className="form-control"
                                        maxLength={13}
                                        name="Telefone3"
                                        id="Telefone3"
                                        placeholder="11-99999-9999"
                                        pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}"
                                        required=""
                                        defaultValue={Telefone3}
                                        onChange={(e) => setTelefone3(e.target.value)}
                                    />
                                </div>
                                <div className="col-2">
                                    <label className="col-sm-3 col-form-label" htmlFor="Whats3">
                                        Whatsapp:
                                    </label>
                                    <select className="form-control" onChange={(e) => setWhats3(e.target.value)} id="Whats3" name="Whats3" defaultValue={Whats3}>
                                        <option value="default" disabled>
                                            Escolha...
                                        </option>
                                        <option value="Sim">Sim</option>
                                        <option value="Não">Não</option>
                                    </select>
                                </div>
                                <div className="col-2">
                                    <label className="col-sm-3 col-form-label genero" htmlFor="Genero3">
                                        Sexo:
                                    </label>
                                    <select className="form-control" id="Genero3" name="Genero3" onChange={(e) => setGenero3(e.target.value)} defaultValue={Genero3}>
                                        <option value="default" disabled>
                                            Escolha...
                                        </option>
                                        <option value="Masculino">Masculino</option>
                                        <option value="Feminino">Feminino</option>
                                        <option value="Outro">Outro</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 mw-100 d-sm-flex infor">
                                <div className="col-7">
                                    <label htmlFor="endereco" className="col-sm-4 col-form-label">
                                        {" "}
                                        Endereço:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="endereco"
                                        id="endereco"
                                        required=""
                                        defaultValue={Endereco3}
                                        onChange={(e) => setEndereco3(e.target.value)}
                                    />
                                </div>
                                <div className="col-3">
                                    <label htmlFor="Certificacao" className="col-sm-5 col-form-label">
                                        Certificação:
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="Certificacao"
                                        id="Certificacao"
                                        required=""
                                        defaultValue={Certificacao}
                                        onChange={(e) => setCertificacao(e.target.value)}
                                    />
                                </div>
                            </div>
                        </section>
                        <div className="col-form-label text-sm-center mw-100 d-sm tituloDisp">
                            <p>Disponibilidade:</p>
                        </div>
                        <div className="col-12 mw-100 justify-content-center d-sm-flex disponibilidade">
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="dia1"
                                    name="dia1"
                                    defaultValue="Segunda-feira"
                                />
                                <label className="form-check-label" htmlFor="dia1">
                                    Segunda-feira
                                </label>
                            </div>
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="dia2"
                                    name="dia2"
                                    defaultValue="Terça-feira"
                                />
                                <label className="form-check-label" htmlFor="dia2">
                                    Terça-feira
                                </label>
                            </div>
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="dia3"
                                    name="dia3"
                                    defaultValue="Quarta-feira"
                                />
                                <label className="form-check-label" htmlFor="dia3">
                                    Quarta-feira
                                </label>
                            </div>
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="dia4"
                                    name="dia4"
                                    defaultValue="Quinta-feira"
                                />
                                <label className="form-check-label" htmlFor="dia4">
                                    Quinta-feira
                                </label>
                            </div>
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="dia5"
                                    name="dia5"
                                    defaultValue="Sexta-feira"
                                />
                                <label className="form-check-label" htmlFor="dia5">
                                    Sexta-feira
                                </label>
                            </div>
                        </div>

                        <div className="col-form-label mw-100 text-sm-center d-sm pturno">
                            <p>Turno:</p>
                        </div>

                        <div className="col-12 mw-100 justify-content-center d-sm-flex turno">

                            <div className="form-check form-check-flex">

                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Manha"
                                    defaultValue="Manha"
                                />
                                <label className="form-check-label" htmlFor="Manha">
                                    Manha
                                </label>
                            </div>
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Tarde"
                                    name="Tarde"
                                    defaultValue="Tarde"

                                />
                                <label className="form-check-label" htmlFor="Tarde">
                                    Tarde
                                </label>
                            </div>
                            <div className="form-check form-check-flex">
                                <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Noite"
                                    name="Noite"
                                    defaultValue="Noite"
                                />
                                <label className="form-check-label" htmlFor="Noite">
                                    Noite
                                </label>
                            </div>
                        </div>

                        <div className="col-12 mw-100 justify-content-center d-sm-flex login">
                            <div className="col-4">
                                <label htmlFor="Email3" className="col-sm-3 col-form-label">
                                    Email:{" "}
                                </label>
                                <input
                                    type="Email3"
                                    className="form-control"
                                    name="Email3"
                                    id="Email3"
                                    required=""
                                    defaultValue={Email3}
                                    onChange={(e) => setEmail3(e.target.value)}
                                />
                            </div>
                            <div className="col-4">
                                <label htmlFor="Senha3" className="col-sm-3 col-form-label">
                                    Senha:{" "}
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    name="Senha3"
                                    id="Senha3"
                                    required=""
                                    defaultValue={Senha3}
                                    onChange={(e) => setSenha3(e.target.value)}
                                />
                            </div>
                        </div>

                        <div className="col-12 mw-100 justify-content-center d-sm-flex infor5">
                            <div className="col-4">
                                <label className="form-label" htmlFor="inputGroupFile02">
                                    Diploma:
                                </label>
                                <input type="file" className="form-control" id="inputGroupFile02" />
                            </div>
                        </div>
                        <div className="col-12 mw-100 justify-content-center d-sm-flex infor6">
                            <div className="col-4">
                                <label className="form-label" htmlFor="inputGroupFile01">
                                    Antecedentes Criminais:
                                </label>
                                <input type="file" className="form-control" id="inputGroupFile01" />
                            </div>
                        </div>

                        <div className="termos">
                            <div className="col-12 mw-100 justify-content-center d-sm-flex infor7">
                                <input
                                    type="checkbox"
                                    id="terms.privacy"
                                    className="input inputCheckBox"
                                    required=""
                                />
                                <a
                                    target="__blank"
                                    className="d-sm-flex"
                                    href="https://online.fliphtml5.com/fluow/jtdv/#p=1"
                                >
                                    Termo voluntário
                                </a>
                            </div>
                            <div className="col-12 mw-100 justify-content-center d-sm-flex infor8">
                                <input
                                    type="checkbox"
                                    id="terms.usage"
                                    className="input inputCheckBox"
                                    required=""
                                />
                                <a
                                    target="__blank"
                                    className="d-sm-flex"
                                    href="https://online.fliphtml5.com/fluow/jtdv/#p=1"
                                >
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

export default Cadastrovolu