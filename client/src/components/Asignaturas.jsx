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
    const [datosFormedit, setDatosFormedit] = React.useState({
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
    const [modal, setModal] = useState(false);
    const [idmongo, setidmongo] = useState("");


    const handleModal = () => { setModal(!modal) }

    const handleChange = (e) => {
        setDatosForm({ ...datosForm, [e.target.name]: e.target.value });

    };
    const handleChangeedit = (e) => {
        console.log(datosFormedit[e.target.name]);
        console.log(e.target.value);
        setDatosFormedit({ ...datosFormedit, [e.target.name]: e.target.value });

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
        } else if (!datosForm.id_profesor === "0") {
            alert("Seleccione el profesor");
            return;
        }




        await fetch('https://andresbarros.herokuapp.com/api/subjects', {
            method: 'POST',
            body: JSON.stringify(datosForm),
            headers: { "Content-Type": 'application/json' }
        });


        setController(true)

        setDatosForm({
            nombre: "",
            salon: "",
            horario: '',
            id_profesor: '0'
        });

    }
    const cambiarasignatura = async (e, id) => {
        console.log('id', id)

        e.preventDefault()


        const { nombre, salon, horario, id_profesor } = datosFormedit
        console.log(nombre)
        console.log(nombre)

        if (!nombre.trim()) {
            alert("Digite los nombres");
            return;
        } else if (!salon.trim()) {
            alert("Digite el salon");
            return;
        }
        if (!horario.trim()) {
            alert("Digite el horario");
            return;
        } else if (!id_profesor === "0") {
            alert("Seleccione el profesor");
            return;
        }
        /* const respuesta = Axios.put(`https://andresbarros.herokuapp.com/api/subjects/${id}`, {
            nombre: nombre.value,
            salon: salon.value,
            horario: horario.value,
            id_profesor: id_profesor.value,
        })
        console.log(respuesta) */

        const response = await fetch(`https://andresbarros.herokuapp.com/api/subjects/${id}`, {
            method: 'PUT',
            body: JSON.stringify(datosFormedit),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const res = await response.json()
        console.log(res)
        //setDatosFormedit(respuesta)
        setController(true)
        handleModal()

        setDatosForm({
            nombre: "",
            salon: "",
            horario: '',
            id_profesor: '0'
        });
    }
    const todos = (item) => {
        editar(item)
        handleModal()
    }

    const editar = (item) => {
        console.log(item)

        setNombre(item.nombre);
        setHorario(item.horario);
        setSalon(item.salon);
        
        setDatosFormedit(item)
        setidmongo(item._id)



    };



    const eliminarAsignatura = async (id) => {
        try {

            const response = await fetch('https://andresbarros.herokuapp.com/api/classes');
            const data = await response.json();
            console.log(data)
            const existe=data.find(item=>item.id_asignatura===id)
            if(existe){
                alert('No se puede eliminar una asignatura asignada a una clase')
                return
            }

            await fetch(`https://andresbarros.herokuapp.com/api/subjects/${id}`, {
                method: 'DELETE'
            })

        } catch (error) {
            console.log(error);
        }
        setController(true)
    };

    const loadTecher = async () => {
        const response = await fetch('https://andresbarros.herokuapp.com/api/teachers');
        const data = await response.json();

        setListaProfesores(data)
    }
    const loadAsignatura = async () => {
        const response = await fetch('https://andresbarros.herokuapp.com/api/subjects');
        const data = await response.json();

        setListaasignaturas(data)
    }


    useEffect(() => {
        loadTecher()
        loadAsignatura()
        setController(false)
    }, [controller])


    return (
        <>
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
                                    type="text"
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
                                    type="text"
                                    placeholder="Ingrese el salon"
                                    name='salon'
                                    value={datosForm.salon}
                                />
                                <h6 className="card-subtitle mb-2 text-muted">
                                    Horario
                                </h6>
                                <input
                                    onChange={handleChange}
                                    className="form-control mb-2 "
                                    type="text"
                                    placeholder="Ingrese el horario"
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
                                                                className="btn btn-warning btn-sm float-end " onClick={() => todos(item)}
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
            {

                modal && (listaasignaturas.map(asignatura => (

                    <div key={asignatura._id} className="modal" tabIndex="-1" style={{ display: 'block' }}>

                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Editar estudiante</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={handleModal}></button>
                                </div>
                                <div className="modal-body">
                                    <p>Aqui puedes editar cualquier estudiante</p>
                                </div>
                                <form onSubmit={(e) => cambiarasignatura(e, idmongo)}>
                                    <select name="id_profesor"
                                        onChange={handleChangeedit}
                                        value={setDatosFormedit.id_profesor}
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
                                        onChange={handleChangeedit}
                                        className="form-control mb-2 "
                                        type="text"
                                        name='nombre'
                                        placeholder="Ingrese nombre"
                                        defaultValue={nombre}
                                    />
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Salon
                                    </h6>
                                    <input
                                        onChange={handleChangeedit}
                                        className="form-control mb-2 "
                                        type="text"
                                        placeholder="Ingrese apellido"
                                        name='salon'
                                        defaultValue={salon}
                                    />
                                    <h6 className="card-subtitle mb-2 text-muted">
                                        Horario
                                    </h6>
                                    <input
                                        onChange={handleChangeedit}
                                        className="form-control mb-2 "
                                        type="text"
                                        placeholder="Ingrese identificacion"
                                        name='horario'
                                        defaultValue={horario}
                                    />
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={handleModal}>Close</button>
                                        <button type="submit" className="btn btn-primary" >Save changes</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                ))

                )
            }
        </>

    )
}
