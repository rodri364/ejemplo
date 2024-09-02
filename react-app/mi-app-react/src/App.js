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
        </div>
    </header>
        <main>
            <div class="login-container">
                <form class="login-form">
                    <h2>Iniciar sesion</h2>
                    <label for="email">Correo electronico</label>
                    <input type="email" id="email" name="email" alt="Correo electronico" placeholder="Ingrese su correo electronico" required />
                    <label for="password">Contraseña</label>
                    <input type="password" id="password" name="password" alt="Contraseña" placeholder="Ingrese su contraseña" required />
                    <button type="submit">Ingresar</button>
                </form>
            </div>
        </main>
    </>
  );
}

export default App;
