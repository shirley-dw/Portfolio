//Importo librerias
import React from "react";
import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { RiTwitterXLine } from "react-icons/ri";
import { FiFacebook } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";

// Importo estilos
import './Footer.css'

const Footer = () => {

    return (
        <footer>
            <div className='footer-container'>
                <div>
                    <h2 className='footer-title'>Shirley Vokac</h2>
                    <span className="footer-subtitle">Alojado en Vercel<IoMdHeart className="heart"/> </span>
                </div>
                <div className='footer-icons'>
                    <a href="https://github.com/shirley-dw"><LuGithub /></a>
                    <a href="www.linkedin.com/in/shirley-vokac"> <FiLinkedin /></a>
                    <a href="https://x.com/Shirvokac_"><RiTwitterXLine /></a>
                    <a href="https://www.facebook.com/ShiirVokac"><FiFacebook /></a>
                </div>
                <div className="footer-copyright">
                    <p className="footer-subtitle">© 2023 - 2024 por vokacshirley.com</p>
                    <p className="footer-subtitle">All rights reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
