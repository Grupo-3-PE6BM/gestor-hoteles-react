import React from "react";
import { Login } from "./login/components/Login";
import { Register } from "./registro/components/Registro";
import { Link, Navigate, Route, Routes } from "react-router-dom";
import { NavBar } from "./NavBar";
import { isUserAuthenticated } from "../src/login/helpers/loginHelper";
import { Footer } from "./Footer";
import { MainPage } from "./main-page/components/MainPage";

export const AppRouter = () => {
  const acepta = true;
  return (
    <>
      <NavBar></NavBar>

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

      <Footer></Footer>
    </>
  );
};
