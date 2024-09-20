import React from 'react';

// Importation des images pour les coques front et side
import frontShellBlue from '../assets/front/GB-Front-GB-GB_FRONT_SHELL_Blue0023.jpg';
import frontShellYellow from '../assets/front/GB-Front-GB-GB_FRONT_SHELL_Yellow0023.jpg';
import frontShellGreen from '../assets/front/GB-Front-GB-GB_FRONT_SHELL_Green0023.jpg';

import sideShellBlue from '../assets/side/GB-Side-GB_SIDE_Blue0024.jpg';
import sideShellYellow from '../assets/side/GB-Side-GB_SIDE_Yellow0024.jpg';
import sideShellGreen from '../assets/side/GB-Side-GB_SIDE_Green0024.jpg';

const Coque = ({ view, selectedOptions, handleOptionChange }) => {
    return (
        <div className="color-options">
            {['blue', 'yellow', 'green'].map((color) => {
                const image = view === 'front'
                    ? (color === 'blue' ? frontShellBlue : color === 'yellow' ? frontShellYellow : frontShellGreen)
                    : (color === 'blue' ? sideShellBlue : color === 'yellow' ? sideShellYellow : sideShellGreen);

                const isSelected = view === 'front'
                    ? selectedOptions.coque === image
                    : selectedOptions.sideCoque === image;

                return (
                    <button
                        key={color}
                        className={`color-circle ${color} ${isSelected ? 'selected' : ''}`}
                        onClick={() =>
                            handleOptionChange(
                                'coque',
                                10, // Exemple de prix
                                image,
                                view === 'side',
                                color
                            )
                        }
                    />
                );
            })}
        </div>
    );
};
export default Coque;