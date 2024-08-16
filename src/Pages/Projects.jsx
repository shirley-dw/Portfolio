// Importo librerias
import React from 'react'

// Importo estilos
import './Projects.css'




const Projects = () => {

    return (
        <section className='projects-section'>
            <div className='projects-container'>
                <h1 className='projects-title'>Amo lo que hago, algunos de mis proyectos</h1>
                </div>
            <div className='projects-info'>
                <h1 className='projects-title'>Whatsapp</h1>
                    <a href="https://whatsapp-mu-mocha.vercel.app/" target="_blank" className='projects-link'>
                        <img src="./imagenes/whatsapp.png" alt="" className='projects-img' /></a>
                    <p className='projects-description'>El proyecto consiste en un módulo web que simula una aplicacion de WhatsApp, el modulo cuenta con tres pestañas. Para desarrollar el mismo he utilizado librerias de React.js como React Router, React Bootstrap y React Modal. Para facilitar los datos de contactos y mensajes he utilizado fetch para traerlos de una archivo.json al igual que las imagenes.</p>
                </div>
            
        </section>
    )
}

export default Projects