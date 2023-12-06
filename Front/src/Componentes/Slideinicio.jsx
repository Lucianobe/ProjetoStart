import React, { useState, useEffect } from 'react';

function Slideinicio() {

    useEffect(() => {
        // Define o título da página quando o componente é montado
        document.title = 'Inicio';
    
        // Se precisar, pode redefinir o título quando o componente é desmontado
        return () => {
          document.title = 'Título Padrão';
        };
      }, []); // O segundo argumento vazio [] garante que o efeito só seja 

    return (

        <div className="d-flex justify-content-center img-container">

            <div id="carouselExampleDark" className="carousel carousel-dark">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={100}>
                        <img src="./src/IMAGES/imagem.png" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={8000}>
                        <img src="./src/IMAGES/libras.jpg" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item" data-bs-interval={8000}>
                        <img src="./src/IMAGES/libras2.jpg" className="d-block w-100" alt="..." />
                    </div>
                </div>

                <section>
                    <div className="btnslid">
                        <button
                            className="carousel-control-prev"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="prev"
                        >
                            <span className="carousel-control-prev-icon" aria-hidden="true" />
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button
                            className="carousel-control-next"
                            type="button"
                            data-bs-target="#carouselExampleDark"
                            data-bs-slide="next"
                        >
                            <span className="carousel-control-next-icon" aria-hidden="true" />
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
            </div>
        </div>

    )

}

export default Slideinicio