import React from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom'
import { Inicio } from '../components/Inicio.jsx'
import {Formulario_estudiante} from '../components/Formulario_estudiante.jsx'

export const AppRouterr = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Inicio />}></Route>
                    <Route path='/api/students' element={<Formulario_estudiante/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
