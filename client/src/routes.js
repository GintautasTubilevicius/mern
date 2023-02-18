import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { AuthPage } from './pages/AuthPage'
import { CreatePage } from './pages/CreatePage'
import { DetailPage } from './pages/DetailPage'
import { LinksPage } from './pages/LinksPage'

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Routes>
                <Route path="/links" element={<LinksPage />}></Route>
                <Route path="/create" element={<CreatePage />}></Route>
                <Route path="/detail/:id" element={<DetailPage />}></Route>
                <Route path ="*" element={<Navigate replace to="/create"/>}/>
            </Routes>
        )
    }

    return (
        <Routes>
            <Route path="/" element={<AuthPage />}></Route>
            <Route path="*" element={<Navigate replace to="/"/>}/>
        </Routes>
    )
}