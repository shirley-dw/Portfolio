//Importo librerias
import React from 'react';


// Importo estilos
import './AboutMe.css'

const AboutMe = () => {
    return (
        <section >
            <div className='section-container-about'>
                <div className='section-info-about'>
                    <h1 className='title-about' for='about'>Apasionada por la tecnología y el desarrollo web. </h1>
                    <p className='description'>
                        ¡Hola! Soy Shirley Vokac. Comencé mi viaje en el desarrollo web en 2022 y obtuve una titulación como Desarrolladora Web en Academia 9ideas. Desde el año 2023, he estado trabajando incansablemente y ampliando mis habilidades por lo que comence a estudiar en la Universidad Tecnologica Nacional la Diplomatura Web Full Stack.
                    </p>
                    <p className='description'>
                        En la actualidad, mi enfoque se centra en el desarrollo front-end, donde creo productos y experiencias digitales. Mi pasión por la tecnología y el aprendizaje constante me motiva a mantenerme al día con las últimas tendencias y herramientas en el campo.
                    </p>
                    <p className='description'>Algunas de las tecnologías con las que he estado trabajando recientemente:</p>
                    <ul className='data'>
                        <li className='btn'>HTML:5</li>
                        <li className='btn'>CSS:3</li>
                        <li className='btn'>JavaScript</li>
                        <li className='btn'>React.JS</li>
                        <li className='btn'>TypeScript</li>
                        <li className='btn'>Bootstrap</li>
                        <li className='btn'>Github</li>
                        <li className='btn'>Git</li>            
                    </ul>
                </div>
                <div className='section-image'>
                    <img src="./imagenes/logohtml.png" alt="" className='img' />
                    <img src="./imagenes/logocss.png" alt="" className='img' />
                    <img src="./imagenes/logo.png" alt="" className='img' />
                    <img src="./imagenes/logojs.png" alt="" className='img' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;