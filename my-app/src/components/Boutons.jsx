import React from 'react';

// Importation des images des boutons
import frontButtonBlack from '../assets/front/GB-Front-GB_FRONT_BUTTON_ClearBlack0023.png';
import frontButtonRed from '../assets/front/GB-Front-GB_FRONT_BUTTON_Red0023.png';
import frontButtonBlue from '../assets/front/GB-Front-GB_FRONT_BUTTON_ClearBlue0023.png';
import sideButtonBlack from '../assets/side/GB-Side-GB_SIDE_BUTTON_Clear_Black0023.png';
import sideButtonRed from '../assets/side/GB-Side-GB_SIDE_BUTTON_Red0023.png';
import sideButtonBlue from '../assets/side/GB-Side-GB_SIDE_BUTTON_Clear_Blue0023.png';

const Boutons = ({ view, selectedOptions, handleOptionChange }) => {
    const handleBoutonsChange = (color) => {
        let price = 10;
        let image = null;
        
        if (view === 'front') {
            image = color === 'black' ? frontButtonBlack : color === 'red' ? frontButtonRed : frontButtonBlue;
        } else {
            image = color === 'black' ? sideButtonBlack : color === 'red' ? sideButtonRed : sideButtonBlue;
        }

        handleOptionChange('boutons', price, image, view === 'side');
    };

    return (
        <div className="boutons-options">
            <div className="color-options">
                <button
                    onClick={() => handleBoutonsChange('black')}
                    className={`color-circle black ${selectedOptions[view === 'front' ? 'boutons' : 'sideBoutons'] === (view === 'front' ? frontButtonBlack : sideButtonBlack) ? 'selected' : ''}`}
                />
                <button
                    onClick={() => handleBoutonsChange('red')}
                    className={`color-circle red ${selectedOptions[view === 'front' ? 'boutons' : 'sideBoutons'] === (view === 'front' ? frontButtonRed : sideButtonRed) ? 'selected' : ''}`}
                />
                <button
                    onClick={() => handleBoutonsChange('blue')}
                    className={`color-circle blue ${selectedOptions[view === 'front' ? 'boutons' : 'sideBoutons'] === (view === 'front' ? frontButtonBlue : sideButtonBlue) ? 'selected' : ''}`}
                />
            </div>
        </div>
    );
};

export default Boutons;
