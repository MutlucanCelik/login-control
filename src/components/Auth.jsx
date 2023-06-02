import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

export default function Auth() {
  return (
    <div className="login-screen">
      <header>
        <NavLink className="link" to={"/"}>
          Giriş
        </NavLink>
        <NavLink className="link" to={"/register"}>
          Kayıt Ol
        </NavLink>
      </header>

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}
