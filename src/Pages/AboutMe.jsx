//Importo librerias
import React from 'react';
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { TbBrandTypescript } from "react-icons/tb";
import { RiHtml5Line } from "react-icons/ri";
import { MdCss } from "react-icons/md";

// Importo estilos
import './AboutMe.css'


const AboutMe = () => {
    return (
        <section >
            <div className='section-container-about'>
                <div className='section-info-about'>
                    <h1 className='title-about' for='about' >Apasionada por la tecnología y el desarrollo web.</h1>

                    <p className='description-about'>
                        ¡Hola! Soy Shirley Vokac. Comencé mi viaje en el desarrollo web en 2022 y obtuve una titulación como Desarrolladora Web en Academia 9ideas. Desde el año 2023, he estado trabajando incansablemente y ampliando mis habilidades por lo que comence a estudiar en la Universidad Tecnologica Nacional la Diplomatura Web Full Stack.
                    </p>
                    <p className='description-about'>
                        En la actualidad, mi enfoque se centra en el desarrollo front-end, donde creo productos y experiencias digitales. Mi pasión por la tecnología y el aprendizaje constante me motiva a mantenerme al día con las últimas tendencias y herramientas en el campo.
                    </p>
                    <p className='description-about'>Algunas de las tecnologías con las que he estado trabajando recientemente:</p>
                    <div className='section-icons'>
                        <IoLogoJavascript  className='icon' />
                        <FaReact  className='icon' />
                        <RiHtml5Line  className='icon' />
                        <TbBrandTypescript  className='icon' />
                        <MdCss  className='icon' />
                    </div>

                </div>

                <div className='section-img-about'>
                <img src="./imagenes/1.png" alt=""className='profile-img' />
                </div>
            </div>
        </section>
    )
}

export default AboutMe;