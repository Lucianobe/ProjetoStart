function Corpo1() {
    return (

        <>

            <div className="geralprincipal">

                <div className="caTitu">
                    <h1 className="text-sm-center mt-3">
                        Conheça o <span>Libras Presente</span>
                    </h1>
                </div>

                <div className="col-12 mw-100 justify-content-center d-sm parte1">

                    <div className="texto1">

                        <img className="boxIMG" src="./src/IMAGES/box-arrow-in-right.svg" />
                        <h2 className="px-1">Faça o login ou cadastre-se</h2>
                        <p className="px-2"> Você terá acesso a voluntários disponíveis.</p>

                        <img className="boxIMG2" src="./src/IMAGES/desktop.svg" />
                        <h2 className="px-0">Modelagem híbrida</h2>
                        <p className="px-2">
                            Os voluntários estão disponíveis nas
                            mobilidades presencial ou EAD.
                        </p>

                        <img className="boxIMG2" src="./src/IMAGES/reader-outline.svg" />
                        <h2>Certificação para intérprete</h2>
                        <p className="px-2">
                            O site disponibiliza certificado para
                            agregar na sua careira profissional.
                        </p>

                        <button className="mt-3">
                            <a href="/Voluntarios">Encontrar voluntário</a>
                        </button>

                    </div>

                    <div className="contIMG text-center">
                        <img className="imgInicio" src="./src/IMAGES/pitch.jpg" />
                    </div>

                </div>

            </div>
        </>

    )
}

export default Corpo1