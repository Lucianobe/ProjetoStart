import Widgetlibras from "../Componentes/Widgetlibras";
import Footer2 from "../Componentes/footer2";
import Listavoluntarios from "../Componentes/Listavoluntarios";
import Menulogin from "../Componentes/Menulogin";

function Voluntarios() {

    return (
        <div>
            <Menulogin />
            <Widgetlibras />
            <handleClick />
            <div>
                <main className="Listavoluntarios">
                    <Listavoluntarios />
                </main>
            </div>

            <div>
                <Footer2 />
            </div>

        </div >

    )
}

export default Voluntarios