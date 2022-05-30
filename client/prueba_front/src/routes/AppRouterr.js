import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Inicio from '../components/Inicio/'


export const AppRouterr = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Inicio />}></Route>
            </Routes>
        </div>
    )
  }
