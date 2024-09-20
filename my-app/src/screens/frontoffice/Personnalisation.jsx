import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../../css/frontoffice/Personnalisation.css';

// Importation des composants
import Coque from '../../components/Coque';
import Boutons from '../../components/Boutons';
import Pads from '../../components/Pads';
import Ecran from '../../components/Ecran';
import Batterie from '../../components/Batterie';
import Accessoires from '../../components/Accessoires';

// Importation des images pour les parties de la console
import frontShellBlue from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Blue0023.jpg';  
import frontShellYellow from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Yellow0023.jpg';      
import frontShellGreen from '../../assets/front/GB-Front-GB-GB_FRONT_SHELL_Green0023.jpg';

import sideShellBlue from '../../assets/side/GB-Side-GB_SIDE_Blue0024.jpg';
import sideShellYellow from '../../assets/side/GB-Side-GB_SIDE_Yellow0024.jpg';
import sideShellGreen from '../../assets/side/GB-Side-GB_SIDE_Green0024.jpg';

import frontButtonBlack from '../../assets/front/GB-Front-GB_FRONT_BUTTON_ClearBlack0023.png';
import frontButtonRed from '../../assets/front/GB-Front-GB_FRONT_BUTTON_Red0023.png';
import frontButtonBlue from '../../assets/front/GB-Front-GB_FRONT_BUTTON_ClearBlue0023.png';
import sideButtonBlack from '../../assets/side/GB-Side-GB_SIDE_BUTTON_Clear_Black0023.png';
import sideButtonRed from '../../assets/side/GB-Side-GB_SIDE_BUTTON_Red0023.png';
import sideButtonBlue from '../../assets/side/GB-Side-GB_SIDE_BUTTON_Clear_Blue0023.png';

import frontPadYellow from '../../assets/front/GB-Front-GB_FRONT_PAD_Yellow0023.png';
import frontPadViolet from '../../assets/front/GB-Front-GB_FRONT_PAD_Violet0023.png';
import frontPadBlack from '../../assets/front/GB-Front-GB_FRONT_PAD_Black0023.png';
import sidePadYellow from '../../assets/side/GB-Side-GB_SIDE_PAD_Yellow0024.png';
import sidePadViolet from '../../assets/side/GB-Side-GB_SIDE_PAD_Violet0024.png';
import sidePadBlack from '../../assets/side/GB-Side-GB_SIDE_PAD_Black0024.png';

import frontIpsBlack from '../../assets/front/GB-Front-GB_FRONT_IPS_BLACK.png';
import frontIpsWhite from '../../assets/front/GB-Front-GB_FRONT_IPS_DMG.png';
import sideIpsBlack from '../../assets/side/GB-Side-GB-SIDE-IPS_Black.png';

export const getSideCoqueFromFront = (frontImage) => {
    switch (frontImage) {
        case frontShellBlue: return sideShellBlue;
        case frontShellYellow: return sideShellYellow;
        case frontShellGreen: return sideShellGreen;
        default: return sideShellBlue; // Default value
    }
};

export const getFrontCoqueFromSide = (sideImage) => {
    switch (sideImage) {
        case sideShellBlue: return frontShellBlue;
        case sideShellYellow: return frontShellYellow;
        case sideShellGreen: return frontShellGreen;
        default: return frontShellBlue; // Default value
    }
};

// Boutons (buttons)
export const getSideBoutonsFromFront = (frontImage) => {
    switch (frontImage) {
        case frontButtonBlack: return sideButtonBlack;
        case frontButtonRed: return sideButtonRed;
        case frontButtonBlue: return sideButtonBlue;
        default: return sideButtonBlack; // Default value
    }
};

export const getFrontBoutonsFromSide = (sideImage) => {
    switch (sideImage) {
        case sideButtonBlack: return frontButtonBlack;
        case sideButtonRed: return frontButtonRed;
        case sideButtonBlue: return frontButtonBlue;
        default: return frontButtonBlack; // Default value
    }
};

// Pads
export const getSidePadsFromFront = (frontImage) => {
    switch (frontImage) {
        case frontPadYellow: return sidePadYellow;
        case frontPadViolet: return sidePadViolet;
        case frontPadBlack: return sidePadBlack;
        default: return sidePadYellow; // Default value
    }
};

export const getFrontPadsFromSide = (sideImage) => {
    switch (sideImage) {
        case sidePadYellow: return frontPadYellow;
        case sidePadViolet: return frontPadViolet;
        case sidePadBlack: return frontPadBlack;
        default: return frontPadYellow; // Default value
    }
};

// Ecran (screen)
export const getSideEcranFromFront = (frontImage) => {
    switch (frontImage) {
        case frontIpsBlack: return sideIpsBlack;
        case frontIpsWhite: return sideIpsBlack; // Assuming side view only has black for simplicity
        default: return sideIpsBlack; // Default value
    }
};

export const getFrontEcranFromSide = (sideImage) => {
    switch (sideImage) {
        case sideIpsBlack: return frontIpsBlack;
        default: return frontIpsBlack; // Default value
    }
};

export default function Personnalisation() {
    const location = useLocation();
    const { title } = location.state || {};

    const [activeSection, setActiveSection] = useState(null);
    const [view, setView] = useState('front');
    
    const [selectedOptions, setSelectedOptions] = useState({
        coque: frontShellBlue,
        sideCoque: sideShellBlue,
        ecran: frontIpsBlack,
        sideEcran: sideIpsBlack,
        boutons: frontButtonBlack,
        sideBoutons: sideButtonBlack,
        pads: frontPadYellow,
        sidePads: sidePadYellow,
    });

    const [totalPrice, setTotalPrice] = useState(149.00);

    // Nouvel état pour suivre les sections dont le prix a déjà été augmenté
const [updatedSections, setUpdatedSections] = useState({
    coque: false,
    boutons: false,
    pads: false,
    ecran: false,
    batterie: false,
    accessoires: false,
});

const handleOptionChange = (option, price, image = null, side = false) => {
    const optionKey = side ? `side${option.charAt(0).toUpperCase() + option.slice(1)}` : option;

    setSelectedOptions((prevOptions) => {
        const newOptions = { ...prevOptions };

        // Vérifier si l'option a changé avant de mettre à jour
        const currentOptionImage = prevOptions[optionKey];
        if (image && currentOptionImage !== image) {
            newOptions[optionKey] = image;

            // Gestion du changement d'options pour la coque
            if (option === 'coque') {
                if (side) {
                    const sideCoqueImage = image;
                    newOptions.sideCoque = sideCoqueImage;
                    newOptions.coque = getFrontCoqueFromSide(sideCoqueImage);
                } else {
                    const frontCoqueImage = image;
                    newOptions.coque = frontCoqueImage;
                    newOptions.sideCoque = getSideCoqueFromFront(frontCoqueImage);
                }
            }

            // Gestion du changement d'options pour les boutons
            if (option === 'boutons') {
                if (side) {
                    const sideBoutonsImage = image;
                    newOptions.sideBoutons = sideBoutonsImage;
                    newOptions.boutons = getFrontBoutonsFromSide(sideBoutonsImage);
                } else {
                    const frontBoutonsImage = image;
                    newOptions.boutons = frontBoutonsImage;
                    newOptions.sideBoutons = getSideBoutonsFromFront(frontBoutonsImage);
                }
            }

            // Gestion du changement d'options pour les pads
            if (option === 'pads') {
                if (side) {
                    const sidePadsImage = image;
                    newOptions.sidePads = sidePadsImage;
                    newOptions.pads = getFrontPadsFromSide(sidePadsImage);
                } else {
                    const frontPadsImage = image;
                    newOptions.pads = frontPadsImage;
                    newOptions.sidePads = getSidePadsFromFront(frontPadsImage);
                }
            }

            // Gestion du changement d'options pour l'écran
            if (option === 'ecran') {
                if (side) {
                    const sideEcranImage = image;
                    newOptions.sideEcran = sideEcranImage;
                    newOptions.ecran = getFrontEcranFromSide(sideEcranImage);
                } else {
                    const frontEcranImage = image;
                    newOptions.ecran = frontEcranImage;
                    newOptions.sideEcran = getSideEcranFromFront(frontEcranImage);
                }
            }

            // Vérifier si la catégorie d'option n'a pas déjà été changée pour éviter d'augmenter plusieurs fois
            if (!updatedSections[option]) {
                setTotalPrice((prevPrice) => prevPrice + price);

                // Marquer cette catégorie comme mise à jour pour empêcher l'augmentation du prix à nouveau
                setUpdatedSections((prevUpdated) => ({
                    ...prevUpdated,
                    [option]: true,
                }));
            }
        }

        return newOptions;
    });

    // Cas de batterie et accessoires (pas d'image, seulement un prix)
    if ((option === 'batterie' || option === 'accessoires') && !updatedSections[option]) {
        setTotalPrice((prevPrice) => prevPrice + price);

        // Marquer comme mise à jour pour empêcher de l'augmenter à nouveau
        setUpdatedSections((prevUpdated) => ({
            ...prevUpdated,
            [option]: true,
        }));
    }
};


    const toggleView = () => {
        setView((prevView) => (prevView === 'front' ? 'side' : 'front'));
    };

    return (
        <div className="personnalisation-container">
            <h1 className="personnalisation-title" style={{ color: '#544297' }}>{title || "Personnalisation de Console"}</h1>

            <button className="rotate-btn" onClick={toggleView}>
                {view === 'front' ? "Side" : "Front"}
            </button>

            <div className="console-viewer">
                <div className="image-wrapper">
                    {view === 'front' ? (
                        <>
                            <img src={selectedOptions.coque} alt="coque front" className="personnalisation-image" />
                            <img src={selectedOptions.boutons} alt="boutons front" className="personnalisation-image boutons" />
                            <img src={selectedOptions.ecran} alt="écran front" className="personnalisation-image ecran" />
                            <img src={selectedOptions.pads} alt="pads front" className="personnalisation-image pads" />
                        </>
                    ) : (
                        <>
                            <img src={selectedOptions.sideCoque} alt="coque side" className="personnalisation-image" />
                            <img src={selectedOptions.sideBoutons} alt="boutons side" className="personnalisation-image boutons" />
                            <img src={selectedOptions.sideEcran} alt="écran side" className="personnalisation-image ecran" />
                            <img src={selectedOptions.sidePads} alt="pads side" className="personnalisation-image pads" />
                        </>
                    )}
                </div>
            </div>

            <div className="form-container">
                {['coque', 'boutons', 'pads', 'ecran', 'batterie', 'accessoires'].map((option) => (
                    <div key={option} className="form-group">
                        <div className="section-option" onClick={() => setActiveSection(activeSection === option ? null : option)}>
                            <span>{option.toUpperCase()}</span>
                            <i className={`fas ${activeSection === option ? 'fa-chevron-down' : 'fa-chevron-right'}`}></i>
                        </div>
                        {activeSection === option && (
                            <div className="option-content">
                                {option === 'coque' && <Coque view={view} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />}
                                {option === 'boutons' && <Boutons view={view} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />}
                                {option === 'pads' && <Pads view={view} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />}
                                {option === 'ecran' && <Ecran view={view} selectedOptions={selectedOptions} handleOptionChange={handleOptionChange} />}
                                {option === 'batterie' && <Batterie selectedOptions={selectedOptions} handleRadioChange={handleOptionChange} />}
                                {option === 'accessoires' && <Accessoires selectedOptions={selectedOptions} handleRadioChange={handleOptionChange} />}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="price-container">
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
