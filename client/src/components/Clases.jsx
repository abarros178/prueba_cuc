import React, { useEffect, useState } from 'react'
import NavBar from './navbar/navBar'

export const Clases = () => {
    const [controller, setController] = useState(false)
    const [datosForm, setDatosForm] = React.useState({
        id_estudiante: '0',
        id_asignatura: '0'
    });

    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });
    };
    const [listaasignaturas, setListaasignaturas] = useState([]);
    const [listaestudiantes, setListaEstudiantes] = useState([]);
    const [listaClases, setListaClases] = useState([]);

    const saveClases = async (e) => {
        e.preventDefault();

        if (!datosForm.id_estudiante === "0") {
            alert("Digite los nombres");
            return;
        } else if (!datosForm.id === "0") {
            alert("Digite el salon");
            return;
        }

        await fetch('https://andresbarros.herokuapp.com/api/classes', {
            method: 'POST',
            body: JSON.stringify(datosForm),
            headers: { "Content-Type": 'application/json' }
        });


        setController(true)
        setDatosForm({
            id_estudiante: '0',
            id_asignatura: '0'
        })
    }

    const loadAsignatura = async () => {
        const response = await fetch('https://andresbarros.herokuapp.com/api/subjects');
        const data = await response.json();

        setListaasignaturas(data)
    }
    const loadEstudiante = async () => {
        const response = await fetch('https://andresbarros.herokuapp.com/api/students');
        const data = await response.json();

        setListaEstudiantes(data)

    }
    const loadclases = async () => {
        const response = await fetch('https://andresbarros.herokuapp.com/api/classes');
        const data = await response.json();
        setListaClases(data)
        console.log(data)
    }

    const devolverEstudiante = (id) => {
        const res = listaestudiantes?.find(item => item._id === id)
        return res
    }

    const devolverAsignatura = (id) => {
        const res = listaasignaturas?.find(item => item._id === id)
        return res
    }


    const eliminarClases = async (id) => {
        try {
            await fetch(`https://andresbarros.herokuapp.com/api/classes/${id}`, {
                method: 'DELETE'
            })

        } catch (error) {
            console.log(error);
        }
        setController(true)
    };





    useEffect(() => {
        loadAsignatura()
        loadEstudiante()
        loadclases()
        setController(false)
    }, [controller])


    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div>
                    <h1 className="text-center font-italic">
                        Crear clase
                    </h1>
                </div>
                <hr />
                <div>
                    <div className="col">
                        <form onSubmit={saveClases}>
                            <label >Escoja el estudiante</label>
                            <select name="id_estudiante"
                                onChange={handleChange}
                                value={datosForm.id_estudiante}
                                className="form-select form-select-sm mb-2 mt-3">
                                <option key='0' value="0" disabled>Seleccione el estudiante</option>
                                {
                                    listaestudiantes.map(item => (
                                        <option key={item._id} value={item._id}>{item.nombre}</option>
                                    ))
                                }
                            </select>
                            <label >Escoja la asignatura</label>
                            <select name="id_asignatura"

                                onChange={handleChange}
                                value={datosForm.id_asignatura}
                                className="form-select form-select-sm mb-2 mt-3">
                                <option key='0' value="0" disabled>Seleccione la asignatura</option>
                                {
                                    listaasignaturas.map(item => (
                                        <option key={item._id} value={item._id}>{item.nombre}</option>
                                    ))
                                }
                            </select>
                            <button className="btn btn-primary btn-block" type='submit'>Agregar</button>
                        </form>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th scope="col">Nombre del estudiante</th>
                                                <th scope="col">Nombre de la asigantura</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listaClases?.map((item, index) => (
                                                <tr key={index}>
                                                    <td>{devolverEstudiante(item.id_estudiante).nombre}</td>
                                                    <td>{devolverAsignatura(item.id_asignatura).nombre}</td>


                                                    <td>
                                                        <button
                                                            className="btn btn-danger btn-sm float-end mx-2 "
                                                            onClick={() => eliminarClases(item._id)}
                                                        >
                                                            Eliminar
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    /</div>
                                /</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}
