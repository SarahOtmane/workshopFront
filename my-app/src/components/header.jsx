import { useState } from "react";
import { Link } from 'react-router-dom'; 
import '../css/frontoffice/header.css';
import logo from '../assets/logo.webp';
import logo_short from '../assets/logo.webp';

export default function Header() {
    const [openPopup, setOpenPopup] = useState(false);

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
        </header>
    )
}
