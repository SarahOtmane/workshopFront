import PropTypes from 'prop-types';
import '../css/components.css'

export default function Button({text, onClick, icon}){
    return(
        <button 
            className="button row"
            onClick={onClick}
        >
            {text}
            {icon && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 6V18" stroke="#999999" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M6 12H18" stroke="#999999" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
            }
            
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    icon: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
};