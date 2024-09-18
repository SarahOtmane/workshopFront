import PropTypes from 'prop-types';
import { useState } from 'react';
import '../css/frontoffice/typeConsoleCard.css'; // Fichier CSS

export default function TypeConsoleCard({ title, picture, color, classe }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`card ${isActive ? 'active' : ''} `}
            style={{
                background: isActive
                    ? `linear-gradient(135deg, ${color} 0%, rgba(0, 0, 0, 0.7) 100%)` // Ajout d'un dégradé plus foncé
                    : '#fff',
                borderColor: color,
            }}
            onClick={() => setIsActive(!isActive)}
        >
            <h2
                className={`card-title ${classe ? 'big-text' : ''}`}
                style={{
                    color: isActive ? '#fff' : color, // Couleur change avant et après clic
                }}
            >
                {title}
            </h2>
            <img src={picture} alt={title} className="card-image" />
        </div>
    );
}

TypeConsoleCard.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    classe: PropTypes.bool.isRequired,
};
