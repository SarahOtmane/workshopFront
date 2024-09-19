import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import '../css/frontoffice/header.css';

export default function Drawer(){
    const [openPopup, setOpenPopup] = useState(false);
    const path = useLocation().pathname;

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return(
        <nav className='navigationMobile'>
        <div id="menuToggle">
            <input type="checkbox" onClick={() => setOpenPopup(!openPopup)} />
            <span></span>
            <span></span>
            <span></span>

            <ul id='menu' className={`${openPopup ? 'open' : ''}`}>
                <li><a href="/" className={path === '/' ? 'active' : ''}>Acceuil</a></li>
                <li><a href="/personnalisation" className={path === '/personnalisation' ? 'active' : ''}>Personnalisation</a></li>
            </ul>
            <div className="overlay"></div>
        </div>
    </nav>
    )
}