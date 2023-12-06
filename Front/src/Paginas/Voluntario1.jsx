import Menulogin from "../Componentes/Menulogin";
import Widgetlibras from "../Componentes/Widgetlibras";
import Footer2 from "../Componentes/footer2";
import Match from "../Componentes/match";

function Voluntario1() {

    return (
        <div>
            <Menulogin />
            <Widgetlibras />
            <handleClick />
            <div>
                <main className="cadastro4">
                    <Match />
                </main>
            </div>

            <div>
                <Footer2 />
            </div>

        </div >

    )
}

export default Voluntario1