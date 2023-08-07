import PropTypes from 'prop-types'

export const Input = ({ register, className, name, type, required, pattern, errors, errorMassage }) => {
    return (
        <label className='label'>
            <input className={className} placeholder={name} type={type} {...register(name, { required, pattern })} />
            {errors && <p className='error-massage'>{errorMassage ? errorMassage : `${name} is required.`}</p>}
        </label>
    )
}

Input.propTypes = {
    register: PropTypes.func,
    name: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.any,
    errors: PropTypes.any,
    errorMassage: PropTypes.string,
    type: PropTypes.string,
}

