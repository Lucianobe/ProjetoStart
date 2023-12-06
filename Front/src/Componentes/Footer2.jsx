function Footer2() {

    return (
        <>

            {/* Remove the container if you want to extend the Footer to full width. */}

            {/* Footer */}
            <footer
                className="text-center text-lg-start text-white"
                style={{ backgroundColor: "#0B5DDE" }}
            >
                {/* Section: Social media */}
                <section
                    className="d-flex justify-content-between p-4"
                    style={{ backgroundColor: "#ffffff21" }}
                >
                    {/* Left */}
                    <div className="me-5">
                        <span>Conecte-se conosco nas redes sociais:</span>
                    </div>
                    {/* Left */}
                    {/* Right */}

                    <div className="d-flex flex-row">
                        <div className="social">
                            <a href="" className="text-white m-1">
                                <img src="./src/IMAGES/facebook.png" />
                            </a>
                        </div>

                        <div className="social">
                            <a href="" className="text-white m-1">
                                <img src="./src/IMAGES/twitter.png" />
                            </a>
                        </div>
                        <div className="social">
                            <a href="" className="text-white m-1">
                                <img src="./src/IMAGES/instagram.png" />
                            </a>
                        </div>
                        <div className="social">
                            <a href="" className="text-white m-1">
                                <img src="./src/IMAGES/linkedin.png" />
                            </a>
                        </div>

                    </div>
                    {/* Right */}
                </section>
                {/* Section: Social media */}
                {/* Section: Links  */}
                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        {/* Grid row */}
                        <div className="row mt-3">
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                {/* Content */}
                                <h6 className="text-uppercase fw-bold">Libras Presente</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                />
                                <p>
                                    O site Libras Presente foi criado para ampliar a acessibilidade aos deficientes auditivos fazendo uma ponte entre o surdo ou instituição que deseja se tornar mais inclusiva ao intérprete voluntário.
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold">Úteis</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                />
                                <p>
                                    <a target="__blank" href="https://online.fliphtml5.com/fluow/jtdv/#p=1" className="text-white">
                                        Termos de imagem e som
                                    </a>
                                </p>
                                <p>
                                    <a target="__blank" href="https://online.fliphtml5.com/fluow/cdxb/" className="text-white">
                                        Termo voluntário
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold">Links</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 60, backgroundColor: "#7c4dff", height: 2 }}
                                />

                                <p>                              
                                    <a href="/Cadastrarpf" className="text-white">
                                        Pessoa Física
                                    </a>
                                </p>
                                <p>
                                    <a href="/Cadastrarinst" className="text-white">
                                        Instituição
                                    </a>
                                </p>
                                <p>
                                    <a href="/Login" className="text-white">
                                        Login
                                    </a>
                                </p>
                            </div>
                            {/* Grid column */}
                            {/* Grid column */}
                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                {/* Links */}
                                <h6 className="text-uppercase fw-bold">Contatos</h6>
                                <hr
                                    className="mb-4 mt-0 d-inline-block mx-auto"
                                    style={{ width: 85, backgroundColor: "#7c4dff", height: 2 }}
                                />
                                <p>
                                    <img src="./src/IMAGES/casa.png" />
                                    <i className="fas fa-home ml-3 paragrafoRoda" /> Boa Vista, Recife - PE, 50060-090
                                </p>

                                <p>
                                    <img src="./src/IMAGES/e-mail.png" />
                                    <i className="fas fa-envelope ml-3 paragrafoRoda" /> LibrasPresente@gmail.com
                                </p>
                                <p>
                                    <img src="./src/IMAGES/telefone.png" />
                                    <i className="fas fa-phone ml-3 paragrafoRoda" /> + 81 9 9569-1558
                                </p>
                            </div>
                            {/* Grid column */}
                        </div>
                        {/* Grid row */}
                    </div>
                </section>
                {/* Section: Links  */}
                {/* Copyright */}
                <div
                    className="text-center p-3"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                >
                    © 2023 Copyright
                </div>
                {/* Copyright */}
            </footer>
            {/* Footer */}
        </>

    )

}

export default Footer2
