// Accessoires.js
import React from 'react';

const Accessoires = ({ selectedOptions, handleRadioChange }) => {
    let color;
    return (
        <div>
            <label>
                <input
                    type="radio"
                    name="accessoires"
                    value="Verre trempé"
                    checked={selectedOptions.accessoires === 'Verre trempé'}
                    onChange={() => handleRadioChange('accessoires', 4.90, color='Verre trempé')}
                />
                Verre trempé (+4.90€)
            </label>
            <label>
                <input
                    type="radio"
                    name="accessoires"
                    value="Coque Silicone"
                    checked={selectedOptions.accessoires === 'Coque Silicone'}
                    onChange={() => handleRadioChange('accessoires', 6.90, color='Coque Silicone')}
                />
                Coque Silicone (+6.90€)
            </label>
        </div>
    );
};

export default Accessoires;
