import React, { useEffect } from 'react';

function Listavoluntarios() {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Voluntarios';

        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
            document.title = 'Título Padrão';
        };
    }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    return (
        <>
            <div className="subtitulo">
                <h1>
                    Nossos <span style={{ color: '#0B5DDE' }}>intérpretes</span> disponíveis esperando por você!
                </h1>
            </div>

            <div className="libox-card">
                <div className="licard1">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete1.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Karol Almeida</h2>
                            <h3>Disponibilidade</h3>
                            <p>Segunda-feira</p>
                            <p>Manhã e Noite</p>
                            <p>Presencial ou Remoto</p>
                        </div>
                        <div>
                            <a href='/Voluntario1'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard2">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete2.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Suelen Queiroz</h2>
                            <h3>Disponibilidade</h3>
                            <p>Quarta- feira e Sexta-feira</p>
                            <p>Noite</p>
                            <p>Remoto</p>
                        </div>
                        <div>
                        <a href='/Voluntario2'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard3">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete3.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Rafael Silva</h2>
                            <h3>Disponibilidade</h3>
                            <p>Quinta-feira</p>
                            <p>Manhã e Tarde</p>
                            <p>Presencial ou Remoto</p>
                        </div>
                        <div>
                        <a href='/Voluntario3'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard4">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete4.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Bruna Santos</h2>
                            <h3>Disponibilidade</h3>
                            <p>Terça-feira</p>
                            <p>Tarde e Noite</p>
                            <p>Remoto</p>
                        </div>
                        <div>
                        <a href='/Voluntario4'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard5">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete5.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Gustavo Peixoto</h2>
                            <h3>Disponibilidade</h3>
                            <p>Quarta-feira</p>
                            <p>Manhã</p>
                            <p>Presencial</p>
                        </div>
                        <div>
                        <a href='/Voluntario5'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard6">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete6.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Carla Neves</h2>
                            <h3>Disponibilidade</h3>
                            <p>Sexta-feira</p>
                            <p>Manhã, Tarde e Noite</p>
                            <p>Presencial ou Remoto</p>
                        </div>
                        <div>
                        <a href='/Voluntario6'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard7">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete7.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Fernando Rodrigues</h2>
                            <h3>Disponibilidade</h3>
                            <p>Segunda-feira e Terça-feira</p>
                            <p>Manhã</p>
                            <p>Remoto</p>
                        </div>
                        <div>
                        <a href='/Voluntario7'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>
                        </div>
                    </div>
                </div>
                <div className="licard8">
                    <div className="licard">
                        <div className="imagem">
                            <img
                                className="livoluntario"
                                src="./src/IMAGES/Interprete8.jpg"
                            />
                        </div>
                        <div className="litexto">
                            <h2>Júlia Oliveira</h2>
                            <h3>Disponibilidade</h3>
                            <p>Terça-feira e Quinta-feira</p>
                            <p>Manhã</p>
                            <p>Remoto</p>
                        </div>
                        <div>
                        <a href='/Voluntario8'><button className="libtn" type="button">
                                Entre em contato
                            </button></a>

                        </div>
                    </div>
                </div>
            </div>
        </>


    )

}

export default Listavoluntarios