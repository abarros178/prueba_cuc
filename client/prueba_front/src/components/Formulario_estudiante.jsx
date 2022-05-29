import React, { useState } from 'react'
import Axios from 'axios';

const Formulario = () => {
    
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [numIdentificacion, setNumidentificacion] = useState(0);
    const [correo, setCorreo] = useState("");
    const [programaAcademico, setProgramaAcademico] = useState("");
    const [form, setForm] = useState();

    const addestudiante = (e) => {

        e.preventDefault()
        
        const { nombre, apellido, identificacion, correo, programaAcademico } = e.target
         const respuesta=Axios.post('http://localhost:8000/api/students', {
                     nombre: nombre.value, 
                     apellido: apellido.value, 
                     numIdentificacion: identificacion.value, 
                     correo: correo.value, 
                     programaAcademico: programaAcademico.value
                 })
                console.log(respuesta)
                setForm(respuesta)
        
            }


    return (
<React.StrictMode>
        <div className="container mt-4">
            <div>
                <h1 className="text-center font-italic">
                    CRUD DE ESTUDIANTES
                </h1>
            </div>
            <hr />
            <div className="col-8">
                <form onSubmit={addestudiante}>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Nombre del estudiante
                    </h6>
                    <input
                        className="form-control mb-2 "
                        type="String"
                        name='nombre'
                        placeholder="Ingrese nombre"
                        defaultValue={nombre}
                    />
                    <h6 className="card-subtitle mb-2 text-muted">
                        Apellido del estudiante
                    </h6>
                    <input
                        className="form-control mb-2 "
                        type="String"
                        placeholder="Ingrese apellido"
                        name='apellido'
                        defaultValue={apellido}
                    />
                    <h6 className="card-subtitle mb-2 text-muted">
                        Numero de id del estudiante
                    </h6>
                    <input
                        className="form-control mb-2 "
                        type="String"
                        placeholder="Ingrese identificacion"
                        name='identificacion'
                        defaultValue={numIdentificacion}
                    />
                    <h6 className="card-subtitle mb-2 text-muted">
                        correo del estudiante
                    </h6>
                    <input
                        className="form-control mb-2 "
                        type="String"
                        placeholder="Ingrese correo"
                        name='correo'
                        defaultValue={correo}
                    />
                    <h6 className="card-subtitle mb-2 text-muted">
                        Programa academico del estudiante
                    </h6>
                    <input
                        className="form-control mb-2 "
                        type="String"
                        placeholder="Ingrese programa academico"
                        name='programaAcademico'
                        defaultValue={programaAcademico}
                    />
                    <button className="btn btn-primary btn-block" type='submit'>
                        Agregar
                    </button>
                </form>
            </div>
        </div>


        </React.StrictMode>

    )
    
}

export default Formulario;