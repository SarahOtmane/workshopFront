import React from 'react';

// Importation des images pour les pads front et side
import frontPadYellow from '../assets/front/GB-Front-GB_FRONT_PAD_Yellow0023.png';
import frontPadViolet from '../assets/front/GB-Front-GB_FRONT_PAD_Violet0023.png';
import frontPadBlack from '../assets/front/GB-Front-GB_FRONT_PAD_Black0023.png';
import sidePadYellow from '../assets/side/GB-Side-GB_SIDE_PAD_Yellow0024.png';
import sidePadViolet from '../assets/side/GB-Side-GB_SIDE_PAD_Violet0024.png';
import sidePadBlack from '../assets/side/GB-Side-GB_SIDE_PAD_Black0024.png';

const Pads = ({ view, selectedOptions, handleOptionChange }) => {
    return (
        <div className="color-options">
            {['yellow', 'violet', 'black'].map((color) => {
                const image = view === 'front'
                    ? (color === 'yellow' ? frontPadYellow : color === 'violet' ? frontPadViolet : frontPadBlack)
                    : (color === 'yellow' ? sidePadYellow : color === 'violet' ? sidePadViolet : sidePadBlack);

                const isSelected = view === 'front'
                    ? selectedOptions.pads === image
                    : selectedOptions.sidePads === image;

                return (
                    <button
                        key={color}
                        className={`color-circle ${color} ${isSelected ? 'selected' : ''}`}
                        onClick={() =>
                            handleOptionChange(
                                'pads',
                                10, // Exemple de prix
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

export default Pads;
