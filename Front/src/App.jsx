import { BrowserRouter, Routes, Route } from "react-router-dom"
import Inicio from "./Paginas/Inicio"
import Login from "./Paginas/Login"
import Cadastrarpf from "./Paginas/Cadastrarpf"
import Cadastrarvolun from "./Paginas/Cadastrarvolun"
import Cadastrarinst from "./Paginas/Cadastrarinst"
import Cadastromatch from "./Paginas/Cadastromatch"
import Voluntarios from "./Paginas/Voluntarios"
import Voluntario1 from "./Paginas/Voluntario1"
import Voluntario2 from "./Paginas/Voluntario2"
import Voluntario3 from "./Paginas/Voluntario3"
import Voluntario4 from "./Paginas/Voluntario4"
import Voluntario5 from "./Paginas/Voluntario5"
import Voluntario6 from "./Paginas/Voluntario6"
import Voluntario7 from "./Paginas/Voluntario7"
import Voluntario8 from "./Paginas/Voluntario8"
import "./css/bootstrap.min.css"
import "./css/bootstrap.css"
import "./css/bootstrap-grid.min.css"
import "./css/style2.css"


function App() {

  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/Cadastrarpf" element={<Cadastrarpf />} />
          <Route path="/Cadastrarvolun" element={<Cadastrarvolun />} />
          <Route path="/Cadastrarinst" element={<Cadastrarinst />} />
          <Route path="/Cadastromatch" element={<Cadastromatch />} />
          <Route path="/Voluntarios" element={<Voluntarios />} />
          <Route path="/Login" element={<Login />} />

          <Route path="/Voluntario1" element={<Voluntario1 />} />
          <Route path="/Voluntario2" element={<Voluntario2 />} />
          <Route path="/Voluntario3" element={<Voluntario3 />} />
          <Route path="/Voluntario4" element={<Voluntario4 />} />
          <Route path="/Voluntario5" element={<Voluntario5 />} />
          <Route path="/Voluntario6" element={<Voluntario6 />} />
          <Route path="/Voluntario7" element={<Voluntario7 />} />
          <Route path="/Voluntario8" element={<Voluntario8 />} />

        </Routes>
      </BrowserRouter>
    </div>
  )
}
export default App