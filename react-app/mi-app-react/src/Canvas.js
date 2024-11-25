import './Canvas.css';
import { useEffect, useRef, useState } from 'react';

function Canvas(params) {
    const gridSize = 20; // Tamaño de cada celda
    const canvasRef = useRef(null);
    const colorPickerContainerRef = useRef(null);
    const defaultColor = "#000000";
    
    // Usamos useState para controlar el color seleccionado y si se puede dibujar
    const [selectedColor, setSelectedColor] = useState(defaultColor);
    const [isDrawingEnabled, setIsDrawingEnabled] = useState(true); // Estado para controlar si se puede dibujar
    const [timeRemaining, setTimeRemaining] = useState(0); // Estado para el tiempo restante
    
    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        // Función para dibujar la cuadrícula
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
        const cuadroColors = Array(2).fill(defaultColor);
        cuadroColors.forEach((color, i) => {
            const div = document.createElement("div");
            div.classList.add("cuadro");

            const colorInput = document.createElement("input");
            colorInput.type = "color";
            colorInput.value = color;
            colorInput.addEventListener("input", (e) => {
                setSelectedColor(e.target.value); // Actualiza el color seleccionado
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
        if (!isDrawingEnabled) {
            return; // Si no está habilitado, no se dibuja
        }

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

        // Desactivar el dibujo por 1 minuto
        setIsDrawingEnabled(false);
        setTimeRemaining(60); // Iniciar el contador en 60 segundos

        // Rehabilitar el dibujo después de 1 minuto (60000 ms)
        const interval = setInterval(() => {
            setTimeRemaining(prev => {
                if (prev <= 1) {
                    clearInterval(interval);
                    setIsDrawingEnabled(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000); // Disminuir el contador cada segundo
    }

    return (
        <>
            <div className="container">
                <div className="sidebar" id="sidebar">
                    <div className="user-section">
                        <img src="user.png" alt="Foto de usuario" className="user-photo" />
                        <div className="user-info">
                            <h4>Usuario</h4>
                            <p>usuario@gmail.com</p>
                        </div>
                    </div>
                    <button type="submit">Cerrar sesión</button>
                </div>

                <div className="menu" id="menu">
                    {/* Eliminar el texto "Tiempo 1" y mantener solo el área para el tiempo */}
                    <ul>
                        <li className="tiempo">
                            {!isDrawingEnabled && (
                                <div className="time-remaining">
                                    <p>Tiempo restante: {timeRemaining} segundos</p>
                                </div>
                            )}
                        </li>
                    </ul>
                </div>

                <button id="toggleSidebar" className="toggle-sidebar-btn"> Sidebar</button>
                <button id="toggleMenu" className="toggle-menu-btn"> Menu</button>

                <div className="canvas-container">
                    <canvas
                        id="canvas"
                        width="550"
                        height="550"
                        onClick={dibujarCanvas}
                        ref={canvasRef}
                    ></canvas>
                    <div className="cuadros" id="color-picker-container" ref={colorPickerContainerRef}></div>
                </div>
            </div>

            <footer>
                <div className="container2">
                    <div>
                        <h4>Contáctanos</h4>
                        <p><i className="fa fa-envelope"></i> nombre@gmail.com</p>
                        <p><i className="fa fa-phone"></i> +1234567890</p>
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
                        <div className="social-icons">
                            <ul>
                                <li><a href="#"><i className='bx bxl-facebook-circle'></i></a>Facebook</li>
                                <li><a href="#"><i className='bx bxl-twitter'></i></a>Twitter</li>
                                <li><a href="#"><i className='bx bxl-youtube'></i></a>Youtube</li>
                                <li><a href="#"><i className='bx bxl-instagram'></i></a>Instagram</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-info">
                    <p>© 2024 Nombre de la app. Todos los derechos reservados.</p>
                </div>
            </footer>

            <script src="lienzo.js"></script>
        </>
    );
}

export default Canvas;
