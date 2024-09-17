import Root, {
    loader as rootLoader,
    action as rootAction,
    loader as contactLoader,
  } from "./routes/root";
import Registro from "./Registro.js";
  




/*
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';

const LoginPage = () => (
  <div className="login-container">
    <form className="login-form">
      <h2>Iniciar sesión</h2>
      <label htmlFor="username">Nombre de usuario</label>
      <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" required />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" required />
      <button type="submit">Ingresar</button>
      <h5>Si no tiene una cuenta ingrese <Link to="/register">aquí</Link></h5>
    </form>
  </div>
);

const RegisterPage = () => (
  <div className="login-container">
    <form className="login-form">
      <h2>Registrarse</h2>
      <label htmlFor="username">Nombre de usuario</label>
      <input type="text" id="username" name="username" placeholder="Crear usuario" required />
      <label htmlFor="email">Correo electrónico</label>
      <input type="email" id="email" name="email" placeholder="Ingrese un correo electrónico" required />
      <label htmlFor="confirm-email">Verificar correo electrónico</label>
      <input type="email" id="confirm-email" name="confirm-email" placeholder="Ingrese su correo electrónico" required />
      <label htmlFor="password">Contraseña</label>
      <input type="password" id="password" name="password" placeholder="Ingrese una contraseña" required />
      <button type="submit">Registrarse</button>
    </form>
  </div>
);

function App() {
  return (
    <Router>
      <header>
        <div className="header-container">
          <div className="titulo">
            <h1>Mi Aplicación</h1>
          </div>
          <nav>
            <ul>
              <li><Link to="/">Iniciar sesión</Link></li>
              <li><Link to="/register">Registrarse</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;*/