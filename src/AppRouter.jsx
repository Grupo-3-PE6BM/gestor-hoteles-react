import React from 'react'
import { Login } from './login/components/Login'
import { Register } from './registro/components/Registro'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { NavBar } from './NavBar';
import { isUserAuthenticated } from '../src/login/helpers/loginHelper';

export const AppRouter = () => {
    return (
        <>
            <NavBar></NavBar>

            <Routes>
                <Route path='/login' element={
                    !isUserAuthenticated() ? <Login></Login> : <Navigate to='/'></Navigate>
                }></Route>
                <Route path='/registro' element={
                    !isUserAuthenticated() ? <Register></Register> : <Navigate to='/'></Navigate>
                }></Route>
            </Routes>
        </>
    );
}
