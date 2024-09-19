import React from 'react';

// Importation des images pour les écrans front et side
import frontIpsBlack from '../assets/front/GB-Front-GB_FRONT_IPS_BLACK.png';
import frontIpsWhite from '../assets/front/GB-Front-GB_FRONT_IPS_DMG.png';
import sideIpsBlack from '../assets/side/GB-Side-GB-SIDE-IPS_Black.png';

const Ecran = ({ view, selectedOptions, handleOptionChange }) => {
    return (
        <div className="color-options">
            {['ipsBlack', 'ipsWhite'].map((screenType) => {
                const image = screenType === 'ipsBlack'
                    ? (view === 'front' ? frontIpsBlack : sideIpsBlack)
                    : (view === 'front' ? frontIpsWhite : sideIpsBlack);

                const isSelected = view === 'front'
                    ? selectedOptions.ecran === image
                    : selectedOptions.sideEcran === image;

                return (
                    <button
                        key={screenType}
                        className={`color-circle ${screenType} ${isSelected ? 'selected' : ''}`}
                        onClick={() =>
                            handleOptionChange(
                                'ecran',
                                20, // Exemple de prix
                                image,
                                view === 'side'
                            )
                        }
                    />
                );
            })}
        </div>
    );
};

export default Ecran;
