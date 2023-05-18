import React from "react";
import { Login } from "./login/components/Login";
import { Register } from "./registro/components/Registro";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { isUserAuthenticated } from "../src/login/helpers/loginHelper";
import { Footer } from "./Footer";
import { MainPage } from "./main-page/components/MainPage";
import { CreateHabitacion } from "./habitaciones/components/AgregarHabitacion";
import { ListaHabitaciones } from "./habitaciones/components/ListaHabitaciones";
import { Servicios } from "./servicios/components/Servicios";
import { ListaHoteles } from "./hoteles/components/ListaHoteles";
import { ListaEventos } from "./eventos/components/ListaEventos";
import { Profile } from "./perfil/components/Profile";
import { CreateHotel } from "./hoteles/components/AgregarHotel";
import { CreateEvento } from "./eventos/components/AgregarEvento";

export const AppRouter = () => {
  const acepta = true;
  return (
    <>
      {/* NavBar */}
      <NavBar></NavBar>

      {/* Pagina Principal */}
      <Routes>
        <Route
          path="/"
          element={
            isUserAuthenticated() ? (
              <MainPage></MainPage>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* Hoteles */}
        <Route
          path="/hoteles"
          element={
            isUserAuthenticated() ? (
              <ListaHoteles></ListaHoteles>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        
        {/* Agregar Hotel */}
        <Route
        path="/agregarHotel"
        element={acepta ? <CreateHotel /> : <Navigate to="/login" />}
        ></Route>

        {/* Habitaciones */}
        <Route
          path="/habitaciones"
          element={
            isUserAuthenticated() ? (
              <ListaHabitaciones></ListaHabitaciones>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* Agregar Habitacion */}
        <Route
        path="/agregarHabitacion"
        element={acepta ? <CreateHabitacion /> : <Navigate to="/login" />}
        ></Route>

        {/* Servicios */}
        <Route
          path="/servicios"
          element={
            isUserAuthenticated() ? (
              <Servicios></Servicios>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

       {/* Eventos */}
       <Route
          path="/eventos"
          element={
            isUserAuthenticated() ? (
              <ListaEventos></ListaEventos>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
        
        {/* Agregar Evento */}
        <Route
        path="/agregarEvento"
        element={acepta ? <CreateEvento /> : <Navigate to="/login" />}
        ></Route>

        {/* Pagina Registro */}
        <Route
          path="/registro"
          element={
            !isUserAuthenticated() ? (
              <Register></Register>
            ) : (
              <Navigate to="/"></Navigate>
            )
          }
        ></Route>

        {/* Pagina Login */}
        <Route
          path="/login"
          element={
            !isUserAuthenticated() ? (
              <Login></Login>
            ) : (
              <Navigate to="/"></Navigate>
            )
          }
        ></Route>

        {/* Mi perfil */}
        <Route
          path="/perfil"
          element={
            isUserAuthenticated() ? (
              <Profile></Profile>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>
      </Routes>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};
