function Feedback() {

    return (


        <>

            <div className="row feedgeral">

                <h2 className="text-md-center" id="feedTitulo">
                    Veja o que dizem sobre a gente
                </h2>

                <div className="container-fluid contCard">
                    <div className="col-12 mw-100 justify-content-center d-md-flex feddCardsgeral">

                        <div className="card4">

                            <div className="feed1">
                                <img src="./src/IMAGES/feedback1.jpg" />
                            </div>

                            <div className="feedEstrelha">
                                <img src="./src/IMAGES/estrela.png" />
                            </div>

                            <p>
                                “A plataforma me ajudou muito! Tive uma excelente experiência com ela, super recomendo!”
                            </p>
                            <h2>Luciano Queiroz</h2>
                            <h3>24/11/2023</h3>
                        </div>

                        <div className="card5">

                            <div className="feed1">
                                <img src="./src/IMAGES/feedback2.jpg" />
                            </div>

                            <div className="feedEstrelha">
                                <img src="./src/IMAGES/estrela.png" />
                            </div>

                            <p>
                                “A plataforma me ajudou muito! Tive uma excelente experiência com ela, super recomendo!”
                            </p>
                            <h2>Luiza Silva</h2>
                            <h3>24/11/2023</h3>
                        </div>
                        <div className="card6">

                            <div className="feed1">
                                <img src="./src/IMAGES/image 3.png" />
                            </div>

                            <div className="feedEstrelha">
                                <img src="./src/IMAGES/estrela.png" />
                            </div>

                            <p>
                                “Graças a plataforma
                                a Innotec se tornou muito mais inclusiva!
                            </p>
                            <h2>Innotec</h2>
                            <h3>24/11/2023</h3>
                            &nbsp;&nbsp;
                        </div>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Feedback