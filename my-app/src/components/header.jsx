<<<<<<< HEAD
import { useState } from "react";
import { Link } from 'react-router-dom'; 
import '../css/frontoffice/header.css';
import logo from '../assets/logo.webp';
import logo_short from '../assets/logo.webp';
=======
import { useState, useEffect } from "react";

import '../css/frontoffice/header.css';
import logo from '../assets/logo.webp';
import logo_short from '../assets/logo_short.webp';
import Drawer from './drawer';
>>>>>>> upstream/header

export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

<<<<<<< HEAD
    return (
        <header className="header row">
            <Link to='/'>
                <img src={openPopup ? logo : logo_short} alt='logo' />
            </Link>
            <nav className='navigationMobile'>
                <div id="menuToggle">
                    <input type="checkbox" onClick={() => setOpenPopup(!openPopup)} />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id='menu' className={`${openPopup ? 'open' : ''}`}>
                            <li><Link to="/">Personnalisation</Link></li>
                            <li><Link to="/">Personnalisation</Link></li>
                            <li><Link to="/">Personnalisation</Link></li>
                            <li><Link to="/">Personnalisation</Link></li>

                        </ul>
                </div>
            </nav>
=======
    return(
        <header>
            <div className="header row">
                <img src={isMobile ? logo_short : logo} alt='logo' />
                <Drawer />
            </div>
>>>>>>> upstream/header
        </header>
    )
}
