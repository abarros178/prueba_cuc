import React from 'react'
import NavBar from './navbar/navBar.jsx'
import img from '../assets/estudiante.jpg'
import img1 from '../assets/profesores.jpg'
import img2 from '../assets/asignaturas.jpg'
import img3 from '../assets/clases.jpg'

export const Inicio = () => {
  return (
    <>
      <NavBar/>
      
      <div className="container mt-5">
        <h1 className="text-center">Sistema de gestion</h1>
        <hr />
        <div className="row">
          <div className="col-sm-6" >
            <div className="card" >
              <div className="card-body row">
                <h5 className="card-title">Registro de estudiantes</h5>
                <p className="card-text">Aqui podra observar el CRUD de estudiantes </p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center">
                  <img className="img-thumbnail" src={img} alt="Teclado" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/students" className="btn btn-primary">Registrar</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 className="card-title">Consulta de profesores</h5>
                <p className="card-text">Aqui podra consultar la lista de profesores cargada</p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center" >
                  <img className="img-thumbnail" src={img1} alt="Teclado" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/teachers" className="btn btn-primary">Consultar</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 className="card-title">Registro de asignaturas</h5>
                <p className="card-text">Aqui podra observar el CRUD de asignaturas</p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center" >
                  <img className="img-thumbnail" src={img2} alt="Teclado" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/subjects" className="btn btn-primary">Consultar</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body row">
                <h5 className="card-title">Registro de clases</h5>
                <p className="card-text">Aqui puede crear las clases</p>
                <div className="col-sm-15 mb-4 d-flex justify-content-center" >
                  <img className="img-thumbnail" src={img3} alt="Teclado" style={{width:'30rem',height:'20rem'}}/>
                </div>
                <a href="/classes" className="btn btn-primary">Consultar</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>

  )
}
