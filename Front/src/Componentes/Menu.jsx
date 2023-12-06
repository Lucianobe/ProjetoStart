import { Link } from "react-router-dom";
import React from 'react';

function Menu() {

  const Btnclick = () => {
    const Menuclicks = () => {

      if (itens.style.display == 'flex') {

        itens.style.display = 'none'
      } else {
        itens.style.display = 'flex'
      }
    };

    return (
      <span onClick={Menuclicks}>
        <img id="burgue" src="./src/IMAGES/Menu2.png" alt="" />
      </span >
    );
  }

  return (

    <nav>
      
      <div className="nav justify-content-start d-md-flex">
        <Link className="Link" to="/">
          <div className="navbar-brand">
            <img src="./src/IMAGES/logo2 - Copia.png" className="logo" alt="" />
          </div>
        </Link>
      </div>

      <div className="nav justify-content-end flex logo2">
        <Link className="Link" to="/Login">
          <img className="imglog" src="./src/IMAGES/Vector.png" alt="" />
        </Link>
      </div>

      <div className="col-12 nav justify-content-end flex Menu">

        <div className="nav justify-content-end flex">
          <Btnclick />
        </div>

        <ul className="nav nav-underline Menu" id="itens">
          <li className="nav-item ">
            <Link className="nav-link Lista_menu" to="/">Inicio</Link>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle Lista_menu"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
            >
              Cadastrar
            </a>

            <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <li>
                <Link className="dropdown-item" to="/Cadastrarinst">Instituição</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Cadastrarpf">Pessoa Física</Link>
              </li>
              <li>
                <Link className="dropdown-item" to="/Cadastrarvolun">Voluntario</Link>
              </li>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link Lista_menu" to="/Login">Login</Link>
          </li>

        </ul>
      </div>
    </nav>

  )

}


export default Menu