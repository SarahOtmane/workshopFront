// src/components/TypeConsoleCard.jsx
import PropTypes from 'prop-types';
import { useState } from 'react';
import '../css/frontoffice/typeConsoleCard.css';

export default function TypeConsoleCard({ title, picture, color, classe, marginTop, onClick }) {
    const [isActive, setIsActive] = useState(false);

    return (
        <div
            className={`card ${isActive ? 'active' : ''}`}
            style={{
                background: isActive 
                    ? '#fff' 
                    : `linear-gradient(140deg, ${color} 0%, rgba(0, 0, 0, 0.8) 100%)`,
                borderColor: isActive ? color : color,
                '--card-color': color,
                marginTop: marginTop,
            }}
            onClick={() => {
                setIsActive(!isActive);
                onClick();  // Appeler la fonction passée au clic
            }}
        >
            <h2
                className={`card-title ${classe ? 'big-text' : ''}`}
                style={{
                    color: isActive ? color : '#fff',
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
    marginTop: PropTypes.string,
    onClick: PropTypes.func.isRequired  // Prop pour capturer le clic
};
