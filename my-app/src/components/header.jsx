import { useState, useEffect } from "react";

import '../css/frontoffice/header.css';
import logo from '../assets/logo.webp';
import logo_short from '../assets/logo_short.webp';
import Drawer from './drawer';

export default function Header(){
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

    return(
        <header>
            <div className="header row">
                <img src={isMobile ? logo_short : logo} alt='logo' />
                <Drawer />
            </div>
        </header>
    )
}