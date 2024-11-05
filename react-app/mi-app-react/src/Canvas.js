import './Canvas.css';
import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

function Canvas(params) {
    const gridSize = 20; // Tamaño de cada celda
    const canvasRef = useRef(0);
    const colorPickerContainerRef = useRef(0);
    const defaultColor = "#000000";
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        
        // Crear cuadrícula en el canvas
        function drawGrid() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = "#ccc";

            for (let x = 0; x < canvas.width; x += gridSize) {
                for (let y = 0; y < canvas.height; y += gridSize) {
                    ctx.strokeRect(x, y, gridSize, gridSize);
                }
            }
        }

        drawGrid();

        // Crear selectores de color
        const cuadroColors = Array(5).fill(defaultColor);

        cuadroColors.forEach((color, i) => {
            const div = document.createElement("div");
            div.classList.add("cuadro");

            const colorInput = document.createElement("input");
            colorInput.type = "color";
            colorInput.value = color;
            colorInput.addEventListener("input", (e) => {
                setSelectedColor(e.target.value); // Al cambiar color, actualiza el color seleccionado
            });

            const label = document.createElement("label");
            label.innerText = `Color ${i + 1}`;

            div.appendChild(colorInput);
            div.appendChild(label);
            colorPickerContainerRef.current.appendChild(div);
        });
    }, [canvasRef, colorPickerContainerRef]);

    // Evento de clic en el canvas para colorear un "pixel"
    function dibujarCanvas(e) {
        const canvas = e.target;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Función para colorear un solo "pixel"
        const ctx = canvas.getContext("2d");
        const rectX = Math.floor(x / gridSize) * gridSize;
        const rectY = Math.floor(y / gridSize) * gridSize;
        ctx.fillStyle = selectedColor;
        ctx.fillRect(rectX, rectY, gridSize, gridSize);
    }

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
            <button type="submit">Cerrar sesion</button>
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

        <div class="canvas-container">
            <canvas id="canvas" width="550" height="550" onClick={dibujarCanvas} ref={canvasRef}></canvas>
            <div class="cuadros" id="color-picker-container" ref={colorPickerContainerRef}>

            </div>
        </div>
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
    <script src="lienzo.js"></script>
    </>
    );
}

export default Canvas;