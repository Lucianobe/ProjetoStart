import React from "react"
import Menu from "../Componentes/Menu";
import Footer2 from "../Componentes/footer2";
import Widgetlibras from "../Componentes/Widgetlibras";
import Cadastropf from "../Componentes/Cadastropf";

function App() {

    return (
        <div>
            <Menu />
            <Widgetlibras />

            <main className="cadastro2">
                <Cadastropf />
            </main>

            <div>
                <Footer2 />
            </div>

        </div >

    )
}

export default App