import PropTypes from 'prop-types'

export const Button = ({text, className, onClick}) => {
    return <button onClick={onClick} className={className}>{text}</button>
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func,
}