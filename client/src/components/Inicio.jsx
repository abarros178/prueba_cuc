import React from 'react'
import NavBar from './navbar/navBar.jsx'
import img from '../assets/estudiante.jpg'
import img1 from '../assets/profesores.jpg'

export const Inicio = () => {
  return (
    <>
      <NavBar/>
      
      <div className="container mt-5">
        <h1 className="text-center">Sistema de gestion de monitorias</h1>
        <hr />
        <div className="row">
          <div className="col-sm-6" >
            <div className="card" >
              <div className="card-body row">
                <h5 className="card-title">Registro de estudiantes</h5>
                <p className="card-text">Aqui podra hacer registro de nuevos minitores asi como tambien asignar nuevas monitorias  </p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center">
                  <img className="img-thumbnail" src={img} alt="Teclado" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/api/students" className="btn btn-primary">Registrar</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 className="card-title">Consulta de datos</h5>
                <p className="card-text">Aqui podra hacer consultas de monitorias ya asignadas y de los monitores registrados hasta el momento</p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center" >
                  <img className="img-thumbnail" src={img1} alt="Teclado" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/api/teachers" className="btn btn-primary">Consultar</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
