import React from "react"
import Menu from "../Componentes/Menu";
import Footer2 from "../Componentes/footer2";
import Widgetlibras from "../Componentes/Widgetlibras";
import Cadastroinstitui from "../Componentes/Cadastroinstitui";

function App() {

    return (
        <div>
            <Menu />
            <Widgetlibras />

            <main className="cadastro1" >
                <Cadastroinstitui />
            </main>

            <div>
                <Footer2 />
            </div>

        </div >

    )
}

export default App