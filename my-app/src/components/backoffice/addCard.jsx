import PropTypes from 'prop-types';
import '../../css/backoffice/component.css';

export default function AddCard({ type, title }) {
    return (
        <div className={`addCard ${type}`}>
            <h1 className='titleCard text_uppercase'>
                {title}
            </h1>
        </div>
    );
}

AddCard.propTypes = {
    title: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};