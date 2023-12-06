import Menu from "../Componentes/Menu";
import Widgetlibras from "../Componentes/Widgetlibras";
import Cadastrovolu from "../Componentes/Cadastrovolu";
import Footer2 from "../Componentes/footer2";


function Cadastrarvolun() {

    return (

        <div>
            <Menu />
            <Widgetlibras />

                <main className="cadastro3">
                    <Cadastrovolu />
                </main>

            <div>
            <Footer2/>
            </div>

        </div >

    )
}

export default Cadastrarvolun