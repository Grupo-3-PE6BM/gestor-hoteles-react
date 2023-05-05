import React from "react";
import { Login } from "./login/components/Login";
import { Register } from "./registro/components/Registro";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { isUserAuthenticated } from "../src/login/helpers/loginHelper";
import { Footer } from "./Footer";
import { MainPage } from "./main-page/components/MainPage";
import { Hoteles } from "./hoteles/components/Hoteles";
import { Eventos } from "./eventos/components/Eventos";
import { Servicios } from "./servicios/components/Servicios";

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
              <Hoteles></Hoteles>
            ) : (
              <Navigate to="/login"></Navigate>
            )
          }
        ></Route>

        {/* Hoteles */}
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
      </Routes>

      {/* Footer */}
      <Footer></Footer>
    </>
  );
};
