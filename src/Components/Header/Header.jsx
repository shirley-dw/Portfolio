// Importo librerias
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";



// Estilos
import './Header.css'

const Header = ({ search, onSearchChange }) => {
    const [searchVisible, setSearchVisible] = useState(false)

    const handleSearchClick = () => {
        setSearchVisible((prevSearchVisible) => !prevSearchVisible);

        if (searchVisible) {
            onSearchChange('');
        }
    };

    return (
        <nav className='container-nav'>
            <div className='navbar'>
            <ul className='nav-links'>
            <h1 className='logo-name'>Shirley Vokac</h1>
                <li className='nav-item'><Link to='/'>Sobre mi</Link></li>
                <li className='nav-item'><Link to='/about'>Curriculum</Link></li>
                <li className='nav-item'><Link to='/contact'>Servicios</Link></li>
            </ul>
           <form action="" className='search'>
                <input
                    type="text"
                    placeholder="Buscar"
                    value={search}
                    onChange={onSearchChange}
                />
                <IoSearch className="search-icon" onClick={handleSearchClick} />
                </form>
                </div>
        </nav>
    )
}


export default Header;