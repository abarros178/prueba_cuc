import React, { useState, useEffect } from 'react'
import Axios from 'axios';

export const Formulario_estudiante = () => {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [numIdentificacion, setNumidentificacion] = useState(0);
    const [correo, setCorreo] = useState("");
    const [programaAcademico, setProgramaAcademico] = useState("");
    const [form, setForm] = useState();
    const [listaestudiantes, setListaEstudiantes] = useState();
    const [controlador, setControlador] = useState(false);


    useEffect(() => {
        Axios.get('http://localhost:8000/api/students').then((response) => {

            console.log(response.data)
            setListaEstudiantes(response.data)
        })

        setControlador(false)

    }, [controlador])

    const eliminar = (id) => {
        try {
            Axios.delete(`http://localhost:8000/api/students/${id}`)
            setControlador(true)
        } catch (error) {
            console.log(error);
        }
    };


    const addestudiante = (e) => {

        e.preventDefault()



        const { nombre, apellido, identificacion, correo, programaAcademico } = e.target
        if (!nombre.value.trim()) {
            alert("Digite los nombres");
            return;
        } else if (!apellido.value.trim()) {
            alert("Digite el apellido");
            return;
        }
        if (!identificacion.value < 0) {
            alert("La identificacion no pueden ser negativo");
            return;
        } else if (!correo.value.trim()) {
            alert("Digite el correo");
            return;
        }
        if (!programaAcademico.value.trim()) {
            alert("Digite el programa academico");
            return;
        }
        const respuesta = Axios.post('http://localhost:8000/api/students', {
            nombre: nombre.value,
            apellido: apellido.value,
            numIdentificacion: identificacion.value,
            correo: correo.value,
            programaAcademico: programaAcademico.value
        })
        console.log(respuesta)
        setForm(respuesta)



    }
    /*setNombre("");
      setApellido("");
      setCorreo("");
      setProgramaAcademico("");*/


    return (
        <React.StrictMode>
            
            <div className="container mt-4">
                <div>
                    <h1 className="text-center font-italic">
                        CRUD DE ESTUDIANTES
                    </h1>
                </div>
                <hr />
                <div>
                    <div className="col">
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

                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Nombre</th>
                                            <th scope="col">Apellido</th>
                                            <th scope="col">Identificacion</th>
                                            <th scope="col ">correo</th>
                                            <th scope="col">Programa Academico</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listaestudiantes?.map((item, index) => (
                                            <tr key={index}>
                                                <td>{item.nombre}</td>
                                                <td>{item.apellido}</td>
                                                <td>{item.numIdentificacion}</td>
                                                <td>{item.correo}</td>
                                                <td>{item.programaAcademico}</td>
                                                <td>
                                                    <button
                                                        className="btn btn-danger btn-sm float-end mx-2" onClick={() => eliminar(item._id)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                                <td>
                                                    <button
                                                        className="btn btn-warning btn-sm float-end "
                                                    >
                                                        Editar
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                </div>
            </div>




           

        </React.StrictMode >
    )

}