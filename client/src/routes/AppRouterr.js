import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio.jsx'
import {Listaprofesores} from '../components/listaprofesores.jsx'
import {Asignaturas} from '../components/Asignaturas'
import { Clases } from '../components/Clases.jsx'
import { Estudiante } from '../components/Estudiante.jsx'



export const AppRouterr = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path='/students' element={<Estudiante/>}></Route>
                    <Route path='/teachers' element={<Listaprofesores/>}></Route>
                    <Route path='/subjects' element={<Asignaturas/>}></Route>
                    <Route path='/classes' element={<Clases/>}></Route>

                </Routes>
            </BrowserRouter>
        </div>
    )
}
