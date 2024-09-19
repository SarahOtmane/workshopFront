import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/frontoffice/Personnalisation.css';

// Importation des images pour le front et le side
import frontShellBlue from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Blue0023.jpg';
import frontShellYellow from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Yellow0023.jpg';
import frontShellGreen from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Green0023.jpg';
import frontPadYellow from '../../assets/front/GB-Front-GB_FRONT_PAD_Yellow0023.png';
import frontPadViolet from '../../assets/front/GB-Front-GB_FRONT_PAD_Violet0023.png';
import frontPadBlack from '../../assets/front/GB-Front-GB_FRONT_PAD_Black0023.png';
import frontIpsBlack from '../../assets/front/GB-Front-GB_FRONT_IPS_BLACK.png';

// Images pour le côté de la console (side)
import sideShellBlue from '../../assets/side/GB-Side-GB_SIDE_Blue0024.jpg';
import sideShellYellow from '../../assets/side/GB-Side-GB_SIDE_Yellow0024.jpg';
import sideShellGreen from '../../assets/side/GB-Side-GB_SIDE_Green0024.jpg';
import sidePadYellow from '../../assets/side/GB-Side-GB_SIDE_PAD_Yellow0024.png';
import sidePadViolet from '../../assets/side/GB-Side-GB_SIDE_PAD_Violet0024.png';
import sidePadBlack from '../../assets/side/GB-Side-GB_SIDE_PAD_Black0024.png';
import sideIpsBlack from '../../assets/side/GB-Side-GB-SIDE-IPS_Black.png'; // Ajoutez cette ligne
import sideButtons from '../../assets/side/GB-Side-GB_SIDE_BUTTON_Clear_Black0023.png'; // Ajoutez cette ligne
export default function Personnalisation() {
    const location = useLocation();
    const { title } = location.state || {};

    const [activeSection, setActiveSection] = useState(null);
    const [view, setView] = useState('front');
    const [selectedOptions, setSelectedOptions] = useState({
        base: null,
        coque: frontShellBlue,
        sideCoque: sideShellBlue,
        coqueArriere: null,
        ecran: frontIpsBlack,
        sideEcran: sideIpsBlack, // Ajoutez cette ligne
        boutons: frontPadYellow,
        sideBoutons: sidePadYellow,
        pads: null,
        coqueSpecial: null,
        stickers: null,
        batterie: null,
        accessoires: null,
    });

    const [totalPrice, setTotalPrice] = useState(149.00);

    // Fonction pour gérer les changements d'options et mettre à jour l'image sélectionnée
    // Fonction pour gérer les changements d'options et mettre à jour l'image sélectionnée
    const handleOptionChange = (option, price, image = null, side = false) => {
        const optionKey = side ? `side${option.charAt(0).toUpperCase() + option.slice(1)}` : option;
        setSelectedOptions((prevOptions) => {
            const newOptions = { ...prevOptions, [optionKey]: image || prevOptions[optionKey] };
    
            if (option === 'coque') {
                // Synchroniser les deux vues (avant et côté)
                if (side) {
                    const sideCoqueImage = image || prevOptions.sideCoque;
                    newOptions.sideCoque = sideCoqueImage;
                    newOptions.coque = getFrontCoqueFromSide(sideCoqueImage); // Synchroniser la vue avant depuis la vue côté
                } else {
                    const frontCoqueImage = image || prevOptions.coque;
                    newOptions.coque = frontCoqueImage;
                    newOptions.sideCoque = getSideCoqueFromFront(frontCoqueImage); // Synchroniser la vue côté depuis la vue avant
                }
            }
    
            return newOptions;
        });
    
        setTotalPrice((prevPrice) => prevPrice + price);
    };
    

// Fonction auxiliaire pour obtenir l'image correspondante du côté, basée sur l'avant
const getSideCoqueFromFront = (frontImage) => {
    if (frontImage === frontShellBlue) return sideShellBlue;
    if (frontImage === frontShellYellow) return sideShellYellow;
    if (frontImage === frontShellGreen) return sideShellGreen;
    return sideShellBlue; // Default if no match
};
const getFrontCoqueFromSide = (sideImage) => {
    if (sideImage === sideShellBlue) return frontShellBlue;
    if (sideImage === sideShellYellow) return frontShellYellow;
    if (sideImage === sideShellGreen) return frontShellGreen;
    return frontShellBlue; // Valeur par défaut si pas de correspondance
};


// Fonction auxiliaire pour obtenir l'image correspondante des boutons du côté, basée sur l'avant
const getSideBoutonsFromFront = (frontImage) => {
    if (frontImage === frontPadYellow) return sidePadYellow;
    if (frontImage === frontPadViolet) return sidePadViolet;
    if (frontImage === frontPadBlack) return sidePadBlack;
    return sidePadYellow; // Default if no match
};


    // Fonction pour gérer les changements d'options de type radio (pour la batterie et les accessoires)
    const handleRadioChange = (option, value, price) => {
        setSelectedOptions((prevOptions) => ({
            ...prevOptions,
            [option]: value,
        }));
        setTotalPrice((prevPrice) => prevPrice + price);
    };

    // Fonction pour basculer entre la vue avant et côté
    const toggleView = () => {
        setView((prevView) => (prevView === 'front' ? 'side' : 'front'));
    };

    return (
        <div className="personnalisation-container">
            <h1 className="personnalisation-title" style={{ color: '#544297' }}>{title || "Personnalisation de Console"}</h1>

            {/* Bouton pour basculer entre front et side */}
            <button className="rotate-btn" onClick={toggleView}>
                {view === 'front' ? "Voir le côté" : "Voir l'avant"}
            </button>

            <div className="console-viewer">
                {/* Afficher l'image selon la vue actuelle (front ou side) */}
                <div className="image-wrapper">
                    {view === 'front' ? (
                        <>
                            {selectedOptions.coque && <img src={selectedOptions.coque} alt="coque front" className="personnalisation-image" />}
                            {selectedOptions.boutons && <img src={selectedOptions.boutons} alt="boutons front" className="personnalisation-image boutons" />}
                            {selectedOptions.ecran && <img src={selectedOptions.ecran} alt="écran front" className="personnalisation-image ecran" />}
                        </>
                    ) : (
                        <>
                            {selectedOptions.sideCoque && <img src={selectedOptions.sideCoque} alt="coque side" className="personnalisation-image" />}
                            {selectedOptions.sideBoutons && <img src={selectedOptions.sideBoutons} alt="boutons side" className="personnalisation-image boutons" />}
                            {selectedOptions.sideEcran && <img src={selectedOptions.sideEcran} alt="écran side" className="personnalisation-image ecran" />} {/* Ajoutez cette ligne */}
                        </>
                    )}
                </div>
            </div>

            <div className="form-container" style={{ borderRadius: '10px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
                {/* Liste des sections */}
                {['base', 'coque', 'coqueArriere', 'ecran', 'boutons', 'pads', 'coqueSpecial', 'stickers', 'batterie', 'accessoires'].map((option) => (
                    <div key={option} className="form-group">
                        <div className="section-option" onClick={() => setActiveSection(activeSection === option ? null : option)}>
                            <span>{option.toUpperCase()}</span>
                            <i className={`fas ${activeSection === option ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                        </div>
                        {activeSection === option && (
                            <div className="option-content">
                                {option === 'coque' || option === 'boutons' || option === 'pads' || option === 'coqueArriere' || option === 'ecran' ? (
                                    <div className="color-options">
                                        {['blue', 'yellow', 'green', 'violet', 'black'].map((color) => (
                                            <button
                                                key={color}
                                                className={`color-circle ${color}`}
                                                onClick={() => handleOptionChange(
                                                    option,
                                                    10,
                                                    color === 'blue' ? (view === 'front' ? frontShellBlue : sideShellBlue) :
                                                    color === 'yellow' ? (view === 'front' ? frontShellYellow : sideShellYellow) :
                                                    color === 'green' ? (view === 'front' ? frontShellGreen : sideShellGreen) :
                                                    color === 'violet' ? (view === 'front' ? frontPadViolet : sidePadViolet) :
                                                    color === 'black' ? (view === 'front' ? frontPadBlack : sidePadBlack) :
                                                    null,
                                                    view === 'side'  // Précise s'il s'agit du côté
                                                )}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div>
                                        {/* Autres options */}
                                        {option === 'batterie' && (
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="batterie"
                                                        value="Sans"
                                                        checked={selectedOptions.batterie === 'Sans'}
                                                        onChange={() => handleRadioChange('batterie', 'Sans', 0)}
                                                    />
                                                    Sans
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="batterie"
                                                        value="Batterie + Câble USB-C"
                                                        checked={selectedOptions.batterie === 'Batterie + Câble USB-C'}
                                                        onChange={() => handleRadioChange('batterie', 'Batterie + Câble USB-C', 15)}
                                                    />
                                                    Batterie + Câble USB-C (+15€)
                                                </label>
                                            </div>
                                        )}

                                        {option === 'accessoires' && (
                                            <div>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="accessoires"
                                                        value="Verre trempé"
                                                        checked={selectedOptions.accessoires === 'Verre trempé'}
                                                        onChange={() => handleRadioChange('accessoires', 'Verre trempé', 4.90)}
                                                    />
                                                    Verre trempé (+4.90€)
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="accessoires"
                                                        value="Coque Silicone"
                                                        checked={selectedOptions.accessoires === 'Coque Silicone'}
                                                        onChange={() => handleRadioChange('accessoires', 'Coque Silicone', 6.90)}
                                                    />
                                                    Coque Silicone (+6.90€)
                                                </label>
                                            </div>
                                        )}
                                        {option === 'base' && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
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
                                        {option === 'stickers' && (
                                            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="stickers"
                                                        value="sans stickers"
                                                        onChange={() => handleRadioChange('stickers', 'sans stickers', 0)}
                                                    />
                                                    sans stickers
                                                </label>
                                                <label>
                                                    <input
                                                        type="radio"
                                                        name="stickers"
                                                        value="avec stickers"
                                                        onChange={() => handleRadioChange('stickers', 'avec stickers', 10)}
                                                    />
                                                    avec stickers (+10€)
                                                </label>
                                            </div>
                                        )}
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
