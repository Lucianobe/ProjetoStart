import Menu from "../Componentes/Menu";
import Footer2 from "../Componentes/footer2";
import Widgetlibras from "../Componentes/Widgetlibras";
import Logar from "../Componentes/Logar"

function Login() {

    return (
        <div>
            <Menu />
            <Widgetlibras />

            <div>
                <main>
                    <Logar />
                </main>
            </div>

            <div>
                <Footer2 />
            </div>

        </div >

    )
}

export default Login