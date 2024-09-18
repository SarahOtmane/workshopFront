import PropTypes from 'prop-types';


export default function TypeConsoleCard({title, picture, color}){
    return(
        <div className="card">
            <h2>{title}</h2>
            <img src={picture} alt={title} />
        </div>
    )
}

TypeConsoleCard.propTypes = {
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
};