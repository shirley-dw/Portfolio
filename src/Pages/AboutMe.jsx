//Importo librerias
import React from 'react';
import { BsCheckCircleFill } from "react-icons/bs";

// Importo estilos
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section >
            <div className='section-container'>
                <div className='section-info'>
            <h1 className='title'>Apasionada por la tecnología y el desarrollo web. </h1>
            <p className='description'>
            ¡Hola! Soy Shirley Vokac. Comencé mi viaje en el desarrollo web en 2022 y obtuve una titulación como Desarrolladora Web en Academia 9ideas. Desde el año 2023, he estado trabajando incansablemente y ampliando mis habilidades por lo que comence a estudiar en la Universidad Tecnologica Nacional la Diplomatura Web Full Stack.
            </p>
            <p className='description'>
            En la actualidad, mi enfoque se centra en el desarrollo front-end, donde creo productos y experiencias digitales. Mi pasión por la tecnología y el aprendizaje constante me motiva a mantenerme al día con las últimas tendencias y herramientas en el campo.
            </p>
            <p className='description'>Algunas de las tecnologías con las que he estado trabajando recientemente:</p>
            <ul className='data'>
                <li className='list'><BsCheckCircleFill className='icon'/> HTML:5</li>
                <li className='list'><BsCheckCircleFill className='icon'/> CSS:3</li>
                <li className='list'><BsCheckCircleFill className='icon'/> JavaScript</li>
                <li className='list'><BsCheckCircleFill className='icon'/> React</li>
                <li className='list'><BsCheckCircleFill className='icon'/> TypeScript</li>
            </ul>
            </div>
            <div className='section-image'>
                <img src="./imagenes/logos.png" alt="" className='img'/>
                <img src="./imagenes/logo.png" alt="" className='img'/>
            </div>
            </div>
        </section>
    )
}

export default AboutMe;