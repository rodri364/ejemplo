import './App.css';
import { Form, useLoaderData } from "react-router-dom";

function App(props) {
  return (
    <>
    <header>
        <div class="header-container">
        <div class="titulo">
            <h1>Nombre titulo</h1>
        </div>
    
        <p><a  class="boton1"  href="index.html">Iniciar sesion</a></p>
        <p><a class="boton2"  href="/registro">Registrarse</a></p>
        </div>
    </header>
        <main>
            <div class="login-container">
                <form class="login-form">
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
