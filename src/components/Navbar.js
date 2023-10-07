import React from 'react'
import NavItem from './NavItem'
import bootstrap from '../../node_modules/bootstrap/dist/css/bootstrap.css'
import logo from '../images/voo-de-aviao.png'

import { faHome } from '@fortawesome/free-solid-svg-icons';
const Navbar = (props) => {
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary shadow-sm p-0"
                id="menu"
            >
                <div className="container-fluid">
                    <a href="index.html" className="navbar-brand fs-2">
                        {" "}
                        <img
                            img src={logo}
                            width={50}
                            height={50}
                            alt=""
                        />{" "}
                        Recode Viagens
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div
                        className="collapse navbar-collapse flex-row-reverse"
                        id="navbarContent"
                    >
                        <ul className="navbar-nav fs-5 d-flex align-items-center">
                        <NavItem link="index.html" active={true} icon={faHome} label="Página Principal" />

                        <NavItem link="destino.html" active={false} icon="fas fa-map-marked-alt" label="Destino" />
                            
                            <li className="nav-item">
                                <a href="../html/promocoes.html" className="nav-link">
                                    {" "}
                                    <i className="fas fa-tags" /> Promoções
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="../html/contato.html" className="nav-link">
                                    <i className="fas fa-phone" /> Contato
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="../html/cadastro.html" className="nav-link">
                                    <i className="fas fa-user-edit" /> Cadastro
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
