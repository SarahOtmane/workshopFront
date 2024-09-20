import React from 'react';

// Importation des images pour la coque arrière
import sideShellBlueDual from '../assets/side/GB-Side-GB_SIDE_Blue0024DUAL.png';
import sideShellBlackDual from '../assets/side/GB-Side-GB_SIDE_Black0024DUAL.png';

const CoqueArriere = ({ selectedOptions, handleOptionChange }) => {
    return (
        <div className="color-options">
            {['blue', 'black'].map((color) => {
                const image = color === 'blue' ? sideShellBlueDual : sideShellBlackDual;

                // Vérifier si l'option sélectionnée pour la coque arrière est celle affichée
                const isSelected = selectedOptions.coqueArriere === image;

                return (
                    <button
                        key={color}
                        className={`color-circle ${color} ${isSelected ? 'selected' : ''}`}
                        onClick={() =>
                            handleOptionChange(
                                'coqueArriere',
                                10,  // Exemple de prix
                                image,
                                true,  // Car cette option affecte seulement la vue "side"
                                color
                            )
                        }
                    />
                );
            })}
        </div>
    );
};

export default CoqueArriere;
