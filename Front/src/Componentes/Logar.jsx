import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Logar = () => {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Login';

        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
            document.title = 'Título Padrão';
        };
    }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:3003/Login', {
                Email, Senha
            });

            // Atualiza a lista após a inserção
            const response = await axios.get('http://localhost:3003');
            setDados(response.data)

            // Limpa os campos do formulário
            setinputEmail('');
            setSenha('');

        } catch (error) {
            console.error('Erro ao inserir dados:', error);
        }
    };

    
    return (

        <>

        
            <div className="container-fluid login2">
                <div className="col-12 mw-100 justify-content-center text-center d-sm-flex form-box">

                    <form method='POST' onSubmit={handleSubmit}>
                        <h2 className="Logintitu">Login</h2>

                        <div className="col-12 inputEmail">
                            <input
                                type="email"
                                className="form-control"
                                name="inputEmail"
                                id="inputEmail"
                                required=""
                                placeholder="Email"

                            />

                        </div>
                        <div className="col-12 inputSenha">
                            <ion-icon name="lock-closed-outline" />
                            <input
                                type="password"
                                className="form-control"
                                name="inputSenha"
                                id="inputSenha"
                                required=""
                                placeholder="Senha"
                            />
                        </div>

                        <button className="btnLogin">Entrar</button>
                        <div className="resgistrer">
                            <p>
                                Ainda não possui uma conta? <a className='linkcada' href="#">Cadastre-se</a>
                            </p>
                        </div>

                    </form>
                </div>
            </div>

        </>
    )
}

export default Logar