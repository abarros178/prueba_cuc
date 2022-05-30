import React, { useState, useEffect } from 'react'
import NavBar from './navbar/navBar';

export const Listaprofesores = () => {
    const [listaProfesores, setListaProfesores] = useState([]);

    const loadTecher = async () => {
        const response = await fetch('https://andresbarros.herokuapp.com/api/teachers');
        const data = await response.json();
        console.log(data);
        setListaProfesores(data)
    }

    useEffect(() => {
        /* Axios.get('https://andresbarros.herokuapp.com/api/teachers').then((response) => {

            console.log(response.data)
            setListaProfesores(response.data)
        }) */
        loadTecher()

    }, [])
    return (


        <>
         <NavBar/>
            <h1 className='text-center font-italic' >Lista de profesores</h1>   
            <hr />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">id</th>
                                    <th scope="col">nombre</th>
                                    <th scope="col">correo</th>
                                    <th scope="col ">telefono</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listaProfesores?.sort((a, b) => a.id - b.id).map((item, index) => (
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.nombre}</td>
                                        <td>{item.correo}</td>
                                        <td>{item.telefono}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>



    )

}
