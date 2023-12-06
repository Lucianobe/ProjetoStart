import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Match = () => {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Cadastro Match';

        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
            document.title = 'Título Padrão';
        };
    }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    const [Nome4, setNome4] = useState('');
    const [Email4, setEmail4] = useState('');
    const [Telefone4, setTelefone4] = useState('');
    const [Modalidade, setModalidade] = useState('');
    const [Endereco4, setEndereco4] = useState('');
    const [Hora4, setHora4] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3003/insertItem4', {
                Nome4, Email4, Telefone4, Modalidade, Endereco4, Hora4

            });

            // Atualiza a lista após a inserção
            const response = await axios.get('http://localhost:3003');
            setDados(response.data);

            // Limpa os campos do formulário
            setNome4('');
            setEmail4('');
            setTelefone4('');
            setModalidade('');
            setEndereco4('');
            setHora4('');


        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        }
    };

    return (
        <div className="container-fluid Geralmatch">

            <div className="box">
                <form onSubmit={handleSubmit}>
                    <fieldset>

                        <div className="formulario">

                            <h1 className="TituloMatch mt-4">
                                Envie algumas <span style={{ color: '#0B5DDE' }}> informações</span> necessárias para o intérprete
                            </h1><br />

                            <div className="col-12 formulario">
                                <label htmlFor="nome" className="col-sm-4 col-form-label">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="inputUsuario2"
                                    id="Nome4"
                                    required=""
                                    defaultValue={Nome4}
                                    onChange={(e) => setNome4(e.target.value)}
                                />
                            </div>

                            <div className="col-12 formulario">
                                <label htmlFor="Email" className="col-sm-4 col-form-label">
                                    Email
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="inputUsuario2"
                                    id="Email4"
                                    required=""
                                    defaultValue={Email4}
                                    onChange={(e) => setEmail4(e.target.value)}
                                />
                            </div>

                            <div className="col-12 formulario">
                                <label htmlFor="telefone" className="col-sm-4 col-form-label">
                                    Telefone
                                </label>

                                <input
                                    type="tel"
                                    className="form-control"
                                    name="inputUsuario2"
                                    id="Telefone4"
                                    required=""
                                    defaultValue={Telefone4}
                                    onChange={(e) => setTelefone4(e.target.value)}
                                />
                            </div>

                            <div className="col-form-label mw-100 text-sm-center mt-4 d-sm paragrafoEvento">
                                <p>O evento será:</p>
                            </div>


                            <div className="col-12 mw-100 justify-content-center d-sm-flex" defaultValue={Modalidade}
                                    onChange={(e) => setModalidade(e.target.value)} >

                                <div className="custom-control custom-radio" >

                                    <div className="custom-control custom-radio Modalidade" >
                                        <input type="radio" class="custom-control-input" id="defaultGroupExample1" name="groupOfDefaultRadios" defaultValue="Presencial"/>
                                        <label className="custom-control-label p" for="defaultGroupExample1">Presencial</label>

                                        <input type="radio" class="custom-control-input" id="defaultGroupExample2" name="groupOfDefaultRadios" defaultValue="Online"/>
                                        <label className="custom-control-label o" for="defaultGroupExample2">Online</label>
                                    </div>

                                </div>
                            </div>

                            <div className="col-12 formulario">

                                <label htmlFor="endereco" className="col-sm-4 col-form-label">
                                    {" "}
                                    Se presencial, informe o endereço
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="inputUsuario2"
                                    id="Endereco4"
                                    required=""
                                    defaultValue={Endereco4}
                                    onChange={(e) => setEndereco4(e.target.value)}
                                />
                            </div>

                            <div className="col-12 formulario">
                                <label htmlFor="hora" className="col-sm-4 col-form-label">
                                    Informe o horário e duração do evento
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    name="inputUsuario2"
                                    id="Hora4"
                                    required=""
                                    defaultValue={Hora4}
                                    onChange={(e) => setHora4(e.target.value)}
                                />
                            </div>

                            <div className="botao2">
                                <button>Enviar</button>
                            </div>

                        </div>
                    </fieldset>
                </form>
            </div>
        </div >

    )

}

export default Match