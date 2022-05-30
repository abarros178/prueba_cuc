import React from 'react'

export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <div id='header' className="container-fluid">
                <a className="navbar-brand" href="/">
                    Universidad de la Costa
                </a>
                {/* <button
                    id="boton"
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">
                                Inicio
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/students">
                                Registro estudiantes
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href="/teachers">
                                Lista profesores
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/subjects">
                                Registro de asignatura
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/classes">
                                Registro de clases
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;