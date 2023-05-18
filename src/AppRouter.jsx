import React from "react";

import {
  isAdmin,
  isSuperAdmin,
  isUserAuthenticated,
} from "./login/helpers/loginHelper";

import { Login } from "./login/components/Login";
import { Register } from "./registro/components/Registro";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { Footer } from "./Footer";
import { MainPage } from "./main-page/components/MainPage";
import { Eventos } from "./eventos/components/Eventos";
import { Servicios } from "./servicios/components/Servicios";
import { Hoteles } from "./hoteles/components/Hoteles";
import { RegisterDev } from "./registro/components/RegistroDev";
import { RegisterAdmin } from "./registro/components/RegistroAdmin";
import { Profile } from "./perfil/components/Profile";
import { Habitaciones } from "./habitaciones/components/Habitaciones";
import { Reservacion } from "./reservacion/components/Reservacion";
import { HabitacionPorId } from "./habitaciones/components/HabitacionesPorID";
import { EventosPorId } from "./eventos/components/EventosPorID";
import { ServicioPorId } from "./servicios/components/ServicioPorID";
import { Buscar } from "./buscar/components/Buscar";
import { ListaHabitacionesDeHotel } from "./habitaciones/components/HabitacionesxHotel";
import { ListaEventosDeHotel } from "./eventos/components/EventosxHotel";
import { ListaHabitaciones } from "./admin/habitaciones/components/ListaHabitaciones";
import { CreateHabitacion } from "./admin/habitaciones/components/AgregarHabitacion";
import { ListUsers } from "./admin/usuarios/components/ListUsers";
import { NavBarDev } from "./NavBarDev";
import { NavBarAdmin } from "./NavBarAdmin";
import { ReservacionAdmin } from "./administrador/reservacion/components/ReservacionAdmin";
import { GraficaHotel } from "./admin/hotel/components/graficaHotel";

export const AppRouter = () => {
  const userIsSuperAdmin = isSuperAdmin();
  const userIsAdmin = isAdmin();
  return (
    <>
      {/* NavBar */}
      <NavBar></NavBar>
      <NavBarDev></NavBarDev>
      <NavBarAdmin></NavBarAdmin>

      {/* Pagina Principal */}
      <Routes>
        <Route path="/" element={<MainPage></MainPage>}></Route>

        {/* Hoteles */}
        <Route
          path="/hoteles"
          element={
            isUserAuthenticated() ? (
              <Hoteles></Hoteles>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* Habitaciones */}
        <Route
          path="/habitaciones"
          element={
            isUserAuthenticated() ? (
              <Habitaciones></Habitaciones>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
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
              <Eventos></Eventos>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* Reservaciones */}
        <Route
          path="/reservacion"
          element={
            isUserAuthenticated() ? (
              <Reservacion></Reservacion>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        <Route
          path="/habitacionID/:id"
          element={
            isUserAuthenticated() ? (
              <HabitacionPorId></HabitacionPorId>
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>

        <Route
          path="/eventoID/:id"
          element={
            isUserAuthenticated() ? (
              <EventosPorId></EventosPorId>
            ) : (
              <Navigate to="/" />
            )
          }
        ></Route>

        {/* Servicios Id */}
        <Route
          path="/servicioID/:id"
          element={
            isUserAuthenticated() ? (
              <ServicioPorId></ServicioPorId>
            ) : (
              <Navigate to="/" />
            )
          }
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

        <Route
          path="/registroAdmin"
          element={
            !isUserAuthenticated() ? (
              <RegisterAdmin></RegisterAdmin>
            ) : (
              <Navigate to="/"></Navigate>
            )
          }
        ></Route>

        <Route
          path="/registroDev"
          element={
            !isUserAuthenticated() ? (
              <RegisterDev></RegisterDev>
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

        <Route
          path="/buscar"
          element={
            isUserAuthenticated() ? (
              <Buscar></Buscar>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        <Route
          path="/habPorHotel/:hotelId"
          element={
            isUserAuthenticated() ? (
              <ListaHabitacionesDeHotel></ListaHabitacionesDeHotel>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        <Route
          path="/evePorHotel/:hotelId"
          element={
            isUserAuthenticated() ? (
              <ListaEventosDeHotel></ListaEventosDeHotel>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* RUTAS DEV*/}
        <Route
          path="/"
          element={
            isSuperAdmin() ? <ListUsers></ListUsers> : <Navigate to="/" />
          }
        ></Route>

        <Route
          path="/grafica"
          element={
            isSuperAdmin() ? <GraficaHotel></GraficaHotel> : <Navigate to="/" />
          }
        ></Route>

        <Route
          path="/listaHabitacionesDev"
          element={
            isSuperAdmin() ? (
              <ListaHabitaciones></ListaHabitaciones>
            ) : (
              <Navigate to="/app" />
            )
          }
        ></Route>

        <Route
          path="/agregarHabitacion"
          element={
            isSuperAdmin ? <CreateHabitacion /> : <Navigate to="/login" />
          }
        ></Route>

        <Route
          path="/listaUsuarios"
          element={isSuperAdmin ? <ListUsers /> : <Navigate to="/login" />}
        ></Route>

        <Route
          path="/listaReservaciones"
          element={isAdmin ? <ReservacionAdmin /> : <Navigate to="/login" />}
        ></Route>
      </Routes>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};
