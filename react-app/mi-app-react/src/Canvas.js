import './Canvas.css';
import { Outlet } from "react-router-dom";

function Canvas(params) {
    return(
        <>
        <div class="container">
        <div class="sidebar" id="sidebar">
            <div class="user-section">
                <img src="user.png" alt="Foto de usuario" class="user-photo"></img>
                <div class="user-info">
                    <h4>Usuario</h4>
                    <p>usuario@gmail.com</p>
                </div>
            </div>
        </div>

        <div class="menu" id="menu">
            <ul>
                <li>Elemento 1</li>
                <li>Elemento 2</li>
                <li>Elemento 3</li>
                <li>Elemento 4</li>
            </ul>
        </div>

        <button id="toggleSidebar" class="toggle-sidebar-btn"> Sidebar</button>
        <button id="toggleMenu" class="toggle-menu-btn"> Menu</button>
    </div>
    <footer>
        <div class="container2">
            <div>
                <h4>Contáctanos</h4>
                <p><i class="fa fa-envelope"></i> nombre@gmail.com</p>
                <p><i class="fa fa-phone"></i> +1234567890</p>
            </div>
            <div>
                <h4>Enlaces útiles</h4>
                <ul>
                    <li><a href="/">Inicio</a></li>
                    <li><a href="/contacto">Contacto</a></li>
                    <li><a href="/politica-de-privacidad">Política de privacidad</a></li>
                    <li><a href="/terminos-y-condiciones">Términos y condiciones</a></li>
                </ul>
            </div>
            <div>
                <h4>Seguinos en:</h4>
                <div class="social-icons">
                    <ul>
                    <li><a href="#"><i class='bx bxl-facebook-circle'></i></a>Facebook</li>
                    <li><a href="#"><i class='bx bxl-twitter'></i></a>Twitter</li>
                    <li><a href="#"><i class='bx bxl-youtube'></i></a>Youtube</li>
                    <li><a href="#"><i class='bx bxl-instagram'></i></a>Instagram</li>
                    </ul>
                </div>

            </div>
        </div>
        <div class="footer-info">
            <p>© 2024 Nombre de la app. Todos los derechos reservados.</p>
        </div>
    </footer>
    </>
    );
}

export default Canvas;