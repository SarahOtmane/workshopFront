import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/frontoffice/Personnalisation.css';

// Importation des images dans le dossier assets
import frontShellBlue from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Blue0023.jpg';
import frontShellRed from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Red0023.jpg';
import frontShellGreen from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Green0023.jpg';
import frontPadYellow from '../../assets/front/GB-Front-GB_FRONT_PAD_Yellow0023.png';
import frontPadViolet from '../../assets/front/GB-Front-GB_FRONT_PAD_Violet0023.png';
import frontPadBlack from '../../assets/front/GB-Front-GB_FRONT_PAD_Black0023.png';
import frontIpsBlack from '../../assets/front/GB-Front-GB_FRONT_IPS_BLACK.png';
// Importation de l'image pour l'écran blanc

export default function Personnalisation() {
    const location = useLocation();
    const { title } = location.state || {}; // On n'a plus besoin de l'image de la carte

    const [activeSection, setActiveSection] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState({
        base: null,
        coque: frontShellBlue,  // Valeur par défaut
        coqueArriere: null,
        ecran: frontIpsBlack,  // Valeur par défaut
        boutons: frontPadYellow,  // Valeur par défaut
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

    // Fonction pour gérer les changements d'options et mettre à jour l'image sélectionnée
    const handleOptionChange = (option, price, image = null) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [option]: image || prevOptions[option], // Met à jour l'image si elle est fournie
        }));
        setTotalPrice((prevPrice) => prevPrice + price);
    };

    return (
        <div className="personnalisation-container">
            <h1 className="personnalisation-title" style={{ color: '#544297' }}>{title || "Personnalisation de Console"}</h1>

            <div className="console-viewer">
                {/* Afficher l'image de la coque */}
                <div className="image-wrapper">
                    {selectedOptions.coque && <img src={selectedOptions.coque} alt="coque" className="personnalisation-image" />}
                    {/* Superposer l'image des boutons */}
                    {selectedOptions.boutons && <img src={selectedOptions.boutons} alt="boutons" className="personnalisation-image boutons" />}
                    {/* Superposer l'image de l'écran */}
                    {selectedOptions.ecran && <img src={selectedOptions.ecran} alt="écran" className="personnalisation-image ecran" />}
                </div>
            </div>

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
                                {/* Gestion des différentes options */}
                                {option === 'base' ? (
                                    <div>
                                        {/* Option spécifique pour la base */}
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
                                ) : (option === 'coque' || option === 'coqueArriere' || option === 'boutons' || option === 'pads' || option === 'coqueSpecial') ? (
                                    <div className="color-options">
                                        {['blue', 'red', 'green', 'yellow', 'violet', 'black'].map((color) => (
                                            <button
                                                key={color}
                                                className={`color-circle ${color}`}
                                                onClick={() =>
                                                    handleOptionChange(option, 10, color === 'blue' ? frontShellBlue :
                                                        color === 'red' ? frontShellRed :
                                                        color === 'green' ? frontShellGreen :
                                                        color === 'yellow' ? frontPadYellow :
                                                        color === 'violet' ? frontPadViolet : frontPadBlack)
                                                }
                                            />
                                        ))}
                                    </div>
                                ) : option === 'ecran' ? (
                                    <div>
                                        {/* Option spécifique pour l'écran */}
                                        <label>
                                            <input
                                                type="radio"
                                                name="ecran"
                                                value="IPS Black"
                                                onChange={() => handleOptionChange('ecran', 20, frontIpsBlack)}
                                                defaultChecked
                                            />
                                            IPS Black (+20€)
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="ecran"
                                                value="IPS White"
                                                onChange={() => handleOptionChange('ecran', 15, frontIpsWhite)}
                                            />
                                            IPS White (+15€)
                                        </label>
                                    </div>
                                ) : (
                                    <div>
                                        {/* Gestion des options sans images spécifiques */}
                                        <label>
                                            <input
                                                type="checkbox"
                                                name={option}
                                                onChange={() => handleOptionChange(option, 5)}
                                            />
                                            Ajouter {option.charAt(0).toUpperCase() + option.slice(1)} (+5€)
                                        </label>
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
