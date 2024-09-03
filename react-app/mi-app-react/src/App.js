import './App.css';

function App(props) {
  return (
    <>
    <header>
        <div class="header-container">
        <div class="titulo">
            <h1>{props.titulo}</h1>
        </div>
        <nav>
        <ul>
            <li><a href="#">1</a></li>
            <li><a href="#">2</a></li>
            <li><a href="#">3</a></li>
            <li><a href="#">4</a></li>
            <li><a href="#">5</a></li>
        </ul>
        </nav>

        <div class="boton1"><p><a class="a" href="index.html">Iniciar sesion</a></p></div>
        <div class="boton2"><p><a class="a" href="registro.html">Registrarse</a></p></div>
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
                    <h5>Si no tiene una cuenta ingrese <a href="registro.html">aqui</a></h5>
                </form>
            </div>
        </main>
    </>
  );
}

export default App;
