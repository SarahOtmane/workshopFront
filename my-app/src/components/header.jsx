import { useState } from "react";

import '../css/frontoffice/header.css';
import logo from '../assets/logo.webp';
import logo_short from '../assets/logo_short.webp';

export default function Header(){
    const [openPopup, setOpenPopup] = useState(false);

    return(
        <header>
            <div className="header row">
            <img src={openPopup ? logo : logo_short} alt='logo' />
            <nav className='navigationMobile'>
                <div id="menuToggle">
                    <input type="checkbox" onClick={() => setOpenPopup(!openPopup)} />
                        <span></span>
                        <span></span>
                        <span></span>

                        <ul id='menu' className={`${openPopup ? 'open' : ''}`}>
                            <li><a href="/">Personnalisation</a></li>
                        </ul>
                </div>
            </nav>
            </div>
        </header>
    )
}