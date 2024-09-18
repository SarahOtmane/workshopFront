import PropTypes from 'prop-types';
import { useState } from 'react';
import '../css/frontoffice/typeConsoleCard.css'; // Fichier CSS mis à jour

export default function TypeConsoleCard({ title, picture, color }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`card ${isActive ? 'active' : ''}`}
            style={{
                borderImage: isActive ? `linear-gradient(45deg, ${color}, #fff)` : 'none',
                borderWidth: '4px',
                borderStyle: 'solid',
            }}
            onClick={() => setIsActive(!isActive)}
        >
            <h2>{title}</h2>
            <div className="image-container">
                <img src={picture} alt={title} />
            </div>
        </div>
    );
}

TypeConsoleCard.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};
