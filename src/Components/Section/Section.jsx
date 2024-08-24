// Importo librerias
import React from 'react'
import { useState, useEffect } from 'react';

import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";

// Importo estilos
import './Section.css'
//Importo componentes
const Section = () => {
    const [color, setColor] = useState('initialColor'); // Inicializa el color
    const colors = [ '#9a2760', '#ffffff']; // Array de colores
    const [currentIndex, setCurrentIndex] = useState(0); // índice del color actual
    
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((currentIndex + 1) % colors.length); // cambia el índice del color
          setColor(colors[currentIndex]); // actualiza el color
        }, 2000); // cada 2 segundos
    
        return () => clearInterval(intervalId); // Elimina el intervalo
    }, [currentIndex, colors]);
  
    return (
        <section>
            <div className='section-container'>
                <div className='section-info'>
                    <h2 className='subtitle' >Hola, soy</h2>
                    <span className='title' style={{ color: color }}>Shirley Vokac</span>
                    <span className='title'  style={{ color: color === '#ffffff' ? 'initialColor' : ' #FFDA76'}}>Desarrolladora Web</span>
                    <p className='description'>+2 años de experiencia. Me encuentro en constante aprendizaje, actualmente estudio en la Universidad Tecnologica Nacional
                        (UTN), habiendo finalizado el cuatrimertres de Front-end.
                        Mi pasion es la programación y resolucion de problemas del cliente.
                    </p>
                    <div className='container-btn'>
                        <a href="" >Mis trabajos</a>
                        <a href="#about">Conoceme</a>
                    </div>
                </div>
                <div className='section-img'>
                    <img src="./imagenes/profile.png" alt="" className='profile-img' />
                    <div className='container-icons'>
                        <a href="https://github.com/shirley-dw"><LuGithub /></a>
                        <a href="www.linkedin.com/in/shirley-vokac"> <FiLinkedin /></a>
                        <a href="https://x.com/Shirvokac_"><RiTwitterXLine /></a>
                        <a href="https://www.facebook.com/ShiirVokac"><FiFacebook /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}


export default Section