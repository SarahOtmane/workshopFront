import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/frontoffice/Personnalisation.css';

export default function Personnalisation() {
    const location = useLocation();
    const { title, picture } = location.state || {}; // Récupérer les infos passées via navigation

    const [activeSection, setActiveSection] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        base: null,
        coque: null,
        coqueArriere: null,
        ecran: null,
        boutons: null,
        pads: null,
        power: null,
        laniere: null,
        coqueSpecial: null,
        stickers: null,
        batterie: null,
        ledRgb: null,
        accessoires: null,
    });

    const [totalPrice, setTotalPrice] = useState(149.00); // Prix de base ajustable

    const handleOptionChange = (option, price) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [option]: price,
        }));
        setTotalPrice((prevPrice) => prevPrice + price);
    };

    return (
        <div className="personnalisation-container">
            <h1 className="personnalisation-title" style={{ color: '#544297' }}>{title || "Personnalisation de Console"}</h1>
            {picture && <img src={picture} alt={title} className="personnalisation-image" />}

            <div className="form-container" style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                {/* Liste des sections */}
                {['base', 'coque', 'coqueArriere', 'ecran', 'boutons', 'pads', 'power', 'laniere', 'coqueSpecial', 'stickers', 'batterie', 'ledRgb', 'accessoires'].map((option) => (
                    <div key={option} className="form-group">
                        <div className="section-option" onClick={() => setActiveSection(activeSection === option ? null : option)}>
                            <span>{option.toUpperCase()}</span>
                            <i className={`fas ${activeSection === option ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                        </div>
                        {activeSection === option && (
                            <div className="option-content">
                                {option === 'coque' || option === 'coqueArriere' || option === 'ecran' || option === 'boutons' ? (
                                    <div className="color-options">
                                        {['red', 'blue', 'green', 'purple', 'yellow', 'black', 'white'].map((color) => (
                                            <button
                                                key={color}
                                                className={`color-circle ${color}`}
                                                style={{ backgroundColor: color }}
                                                onClick={() => handleOptionChange(option, 10)} // Prix fixe pour chaque couleur
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        {/* Exemple pour d'autres options comme la base */}
                                        {option === 'base' && (
                                            <div className="option-content">
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="base"
                                                        value="Je fournis la console"
                                                        onChange={() => handleOptionChange('base', 0)}
                                                    />
                                                    Je fournis la console
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="base"
                                                        value="Je n’ai pas de console à fournir (+40€)"
                                                        onChange={() => handleOptionChange('base', 40)}
                                                    />
                                                    Je n’ai pas de console à fournir (+40€)
                                                </label>
                                            </div>
                                        )}
                                        {/* Ajoutez ici d'autres options spécifiques */}
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Section du prix total et bouton panier */}
            <div className="price-container" style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', padding: '20px', marginTop: '20px' }}>
                <h3>{totalPrice.toFixed(2)}€</h3>
                <h1>Prix total</h1>
                <p>Acompte (30%) : {(totalPrice * 0.3).toFixed(2)}€</p>
                <p>Livraison dans 35 - 40 jours</p>

                <button className="submit-btn">
                    <i className="fas fa-shopping-cart"></i>
                </button>
            </div>
        </div>
    );
}
