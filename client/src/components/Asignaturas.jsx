import { Axios } from 'axios';
import React, { useState, useEffect } from 'react'
import NavBar from './navbar/navBar';


export const Asignaturas = () => {

    const [controller, setController] = useState(false)
    const [datosForm, setDatosForm] = React.useState({
        nombre: "",
        salon: "",
        horario: '',
        id_profesor: '0'
    });



    const [listaProfesores, setListaProfesores] = useState([]);
    const [listaasignaturas, setListaasignaturas] = useState([]);

    const [nombre, setNombre] = useState("")
    const [salon, setSalon] = useState("")
    const [horario, setHorario] = useState("")



    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    };

    const devolverProfesor = (id) => {
        const res = listaProfesores?.find(item => item._id === id)
        return res
    }
    const saveAsignature = async (e) => {
        e.preventDefault();
        
        if (!datosForm.nombre.trim()) {
            alert("Digite los nombres");
            return;
        } else if (!datosForm.salon.trim()) {
            alert("Digite el salon");
            return;
        }
        if (!datosForm.horario.trim()) {
            alert("Digite el horario");
            return;
        } else if (!datosForm.id_profesor==="0") {
            alert("Seleccione el profesor");
            return;
        }
        

        

        await fetch('http://localhost:8000/api/subjects', {
            method: 'POST',
            body: JSON.stringify(datosForm),
            headers: { "Content-Type": 'application/json' }
        });


        setController(true)
    }


    const eliminarAsignatura = async(id) => {
        try {
           await fetch(`http://localhost:8000/api/subjects/${id}`,{
            method: 'DELETE'
           })
            
        } catch (error) {
            console.log(error);
        }
        setController(true)
    };

    const loadTecher = async () => {
        const response = await fetch('http://localhost:8000/api/teachers');
        const data = await response.json();

        setListaProfesores(data)
    }
    const loadAsignatura = async () => {
        const response = await fetch('http://localhost:8000/api/subjects');
        const data = await response.json();

        setListaasignaturas(data)
    }


    useEffect(() => {
        loadTecher()
        loadAsignatura()
        setController(false)
    }, [controller])


    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div>
                    <h1 className="text-center font-italic">
                        CRUD DE ASIGNATURAS
                    </h1>
                </div>
                <hr />
                <div className="container mt-4">
                    <div className="col">
                        <form onSubmit={saveAsignature}>
                            <select name="id_profesor"
                                onChange={handleChange}
                                value={datosForm.id_profesor}
                                className="form-select form-select-sm mb-2 mt-3">
                                <option key='0' value="0" disabled>Seleccione el profesor</option>
                                {
                                    listaProfesores.map(item => (
                                        <option key={item._id} value={item._id}>{item.nombre}</option>
                                    ))
                                }
                            </select>
                            <h6 className="card-subtitle mb-2 text-muted">
                                nombre
                            </h6>
                            <input
                                onChange={handleChange}
                                className="form-control mb-2 "
                                type="String"
                                name='nombre'
                                placeholder="Ingrese nombre"
                                value={datosForm.nombre}
                            />
                            <h6 className="card-subtitle mb-2 text-muted">
                                Salon
                            </h6>
                            <input
                                onChange={handleChange}
                                className="form-control mb-2 "
                                type="String"
                                placeholder="Ingrese apellido"
                                name='salon'
                                value={datosForm.salon}
                            />
                            <h6 className="card-subtitle mb-2 text-muted">
                                Horario
                            </h6>
                            <input
                                onChange={handleChange}
                                className="form-control mb-2 "
                                type="String"
                                placeholder="Ingrese identificacion"
                                name='horario'
                                value={datosForm.horario}
                            />

                            <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
                        </form>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre</th>
                                                <th scope="col">Salon</th>
                                                <th scope="col">Horario</th>
                                                <th scope="col ">Nombre del profesor</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listaasignaturas?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{item.nombre}</td>
                                                    <td>{item.salon}</td>
                                                    <td>{item.horario}</td>
                                                    <td>{devolverProfesor(item.id_profesor).nombre}</td>


                                                    <td>
                                                        <button
                                                            className="btn btn-danger btn-sm float-end mx-2 "
                                                            onClick={() => eliminarAsignatura(item._id)}
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
            </div>
        </div>


    )
}
