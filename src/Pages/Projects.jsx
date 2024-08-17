// Importo librerias
import React from 'react'
import { LuGithub } from "react-icons/lu";
// Importo estilos
import './Projects.css'

const Projects = () => {

    return (
        <section className='projects-section'>
            <h1 className='title'>Amo lo que hago, algunos de mis proyectos</h1>
            <div className='projects-container'>
                <div className='projects-todo'>
                    <div className='whatsapp'>
                        <img src="./imagenes/whatsapp.png" alt="" className='projects-img' style={{ width: "500px", height: "300px", borderRadius: "10px" }} />
                        <p className='projects-description'>
                            <h1 className='projects-title'>Whatsapp</h1>
                            Desarrollé un módulo web que simula una aplicación de mensajería estilo WhatsApp, con una interfaz intuitiva y fácil. El módulo cuenta con tres pestañas principales que permiten al usuario navegar y gestionar sus conversaciones de manera efectiva. Para construir este proyecto, utilicélibrerías de React.js como React Router , React Bootstrap  y React Modal . Para obtener los datos de contactos y mensajes, utilicé la función fetch para recuperarlos de un archivo JSON, lo que me permitió simular una base de datos real.
                            <a href="https://github.com/shirley-dw/Mensajeria.git" target='_blank ' className='link-github'><LuGithub /></a>
                            </p>
                    </div>
                    <div className='snake'>
                        <img src="./imagenes/snakegame.png" alt="" className='projects-img' style={{ width: "500px", height: "300px", borderRadius: "10px" }} />
                        <p className='projects-description'>
                            <h1 className='projects-title'>SnakeGame</h1>
                            Desarrollé un juego de Snake clásico, donde el jugador puede controlar la serpiente utilizando las flechas del teclado o el mouse. El juego fue creado utilizando una combinación de HTML, CSS y JavaScript, lo que permite una experiencia de juego fluida y dinámica. Con un diseño simple e intuitivo, el mismo desafía al jugador a navegar por la pantalla y comer las manzanas mientras evita chocar con los bordes o consigo mismo.
                            <a href="https://github.com/shirley-dw/SnakeGame.git" target='_blank' className='link-github'><LuGithub /></a>
                        </p>
                    </div>
                    <div className='hostinger'>
                        <img src="./imagenes/sectionhostinger.png" alt="" className='projects-img' style={{ width: "500px", height: "300px", borderRadius: "10px" }} />
                        <p className='projects-description'>
                            <h1 className='projects-title'>Hostinger</h1>
                            Desarrollé una réplica de la sección principal del sitio web de Hostinger, utilizando HTML y CSS como tecnologías principales. Para asegurar una experiencia de usuario óptima en diferentes dispositivos, implementé Media Queries para lograr una responsividad total y adaptabilidad en varios tamaños de pantalla. De esta manera, la sección principal se ajusta perfectamente a las necesidades de los usuarios.
                            <a href="https://github.com/shirley-dw/SectionHostinger.git" target='_blank' className='link-github'><LuGithub /></a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Projects