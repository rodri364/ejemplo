import { useState } from 'react';
import './App.css';
import { Form, Navigate, useLoaderData } from "react-router-dom";

function App(props) {
    const [usuario, setUsuario] = useState(null);
    function handleSubmit(event) {
        event.preventDefault();
        if (true) {
            setUsuario(true);
        }
        
    }
  return (
    <>
    <header>
        <div class="titulo">
            <h1>Nombre titulo</h1>
        </div>
    
        <ul class="lista">
            <li><a  class="boton1"  href="/app">Iniciar sesion</a></li>
            <li><a class="boton2"  href="/registro">Registrarse</a></li>
        </ul>
    </header>
        <main>
            {usuario && <Navigate to="/canvas" replace={true} />}
            <div class="login-container">
                <form class="login-form" onSubmit={handleSubmit}>
                    <h2>Iniciar sesion</h2>
                    <label for="username">Nombre de usuario</label>
                    <input type="username" id="username" name="username" alt="Nombre de usuario" placeholder="Ingrese su nombre de usuario" required />
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" alt="Contraseña" placeholder="Ingrese su contraseña" required />
                    <button type="submit">Ingresar</button>
                    <h5>Si no tiene una cuenta ingrese <a href="/registro">aqui</a></h5>
                </form>
            </div>
        </main>
    </>
  );
}

export default App;
