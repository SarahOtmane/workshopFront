import PropTypes from 'prop-types';

export default function InputProduct({label, type = "text", placeholder = "", onChange, name, value}){
    return(
        <div className="inputLabel column">
            <label><h2>{label}</h2></label>
            <input 
                type={type} 
                placeholder={placeholder} 
                name={name} 
                onChange={onChange}
                {...(type !== 'file' && { value })}
                {...(type === 'file' && { accept: '.webp .png .jpg' })}
                {...(type === 'checkbox' && { checked: value })}
                className={type === 'color' ? 'color-input' : 'inputField'}
            />
        </div>
    )
}

InputProduct.propTypes = {
    label: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.bool]),
};