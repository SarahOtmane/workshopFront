// Batterie.js
import React from 'react';

const Batterie = ({ selectedOptions, handleRadioChange }) => {
    let color;

    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="batterie"
                    value="Sans"
                    checked={selectedOptions.batterie === 'Sans'}
                    onChange={() => handleRadioChange('batterie', 0, color='Sans')}
                />
                Sans
            </label>
            <label>
                <input
                    type="radio"
                    name="batterie"
                    value="Batterie + Câble USB-C"
                    checked={selectedOptions.batterie === 'Batterie + Câble USB-C'}
                    onChange={() => handleRadioChange('batterie', 15, color='Batterie + Câble USB-C')}
                />
                Batterie + Câble USB-C (+15€)
            </label>
        </div>
    );
};

export default Batterie;
