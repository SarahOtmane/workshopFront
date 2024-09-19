import PropTypes from 'prop-types';
import { useState } from 'react';
import '../css/frontoffice/typeConsoleCard.css';

export default function TypeConsoleCard({ title, picture, color, classe, marginTop }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`card ${isActive ? 'active' : ''}`}
            style={{
                background: isActive 
                    ? '#fff' 
                    : `linear-gradient(140deg, ${color} 0%, rgba(0, 0, 0, 0.8) 100%)`,  // Dégradé plus clair en haut
                borderColor: isActive ? color : color,  // La bordure reste colorée au départ et après le clic
                '--card-color': color, // Définir la couleur comme variable CSS
                marginTop: marginTop, // Appliquer le marginTop reçu
            }}
            onClick={() => setIsActive(!isActive)} // Inverser l'état de la carte au clic
        >
            <h2
                className={`card-title ${classe ? 'big-text' : ''}`}
                style={{
                    color: isActive ? color : '#fff', // Le texte devient coloré au clic et blanc au départ
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
    marginTop: PropTypes.string, // Ajouter cette prop optionnelle
};
