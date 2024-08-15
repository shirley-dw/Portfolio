//Importo librerias
import React from "react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";

// Importo estilos
import './Footer.css'

const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div className='footer-info'>   
                    <h2 className='footer-title'>Shirley Vokac</h2>
                    <span className='footer-subtitle'>Desarrolladora Web</span>
                </div>
                <div className='footer-icons'>
                    <a href="https://github.com/shirley-dw"><LuGithub /></a>
                    <a href="www.linkedin.com/in/shirley-vokac"> <FiLinkedin /></a>
                    <a href="https://x.com/Shirvokac_"><RiTwitterXLine /></a>
                    <a href="https://www.facebook.com/ShiirVokac"><FiFacebook /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer
