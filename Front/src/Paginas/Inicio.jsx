import Menu from "../Componentes/Menu";
import Slideinicio from "../Componentes/Slideinicio";
import Corpo1 from "../Componentes/Corpo1";
import Widgetlibras from "../Componentes/Widgetlibras";
import Perguntas from "../Componentes/Perguntas";
import Footer2 from "../Componentes/footer2";
import Cards from "../Componentes/Cards";
import Feedback from "../Componentes/Feedback";

function Inicio() {

    return (
        <div>
            <Menu />
            <Widgetlibras />
            <handleClick />
            <div>
                <main>

                    <Slideinicio />
                    <Corpo1 />
                    <Cards />
                    <Feedback />
                    <Perguntas />

                </main>
            </div>

            <div>
                <Footer2 />
            </div>

        </div >

    )
}

export default Inicio