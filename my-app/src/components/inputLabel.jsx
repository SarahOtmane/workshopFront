import PropTypes from 'prop-types';

export default function InputLabel({label, value, type, placeholder, onChange}){
    return(
        <div className="inputLabel column">
            <label className="textBold">{label}</label>        
            <input 
                type={type} 
                placeholder={placeholder} 
                value={value}
                onChange={onChange}
            />
        </div>
    )
}

InputLabel.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
};


InputLabel.defaultProps = {
  placeholder: '',
};