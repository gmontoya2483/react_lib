import className from 'classnames'


function Button({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}) {


    const classes =  className(rest.className, 'flex', 'items-center','px-3', 'py-1.5', 'border', {
        'border-blue-500 bg-blue-500 text-white hover:bg-blue-600': primary && !outline,
        'border-gary-800 bg-gray-800 text-white hover:bg-gray-900': secondary && !outline,
        'border-green-500 bg-green-500 text-white hover:bg-green-600': success && !outline,
        'border-yellow-500 bg-yellow-500 text-white hover:bg-yellow-600': warning && !outline,
        'border-red-500 bg-red-500 text-white hover:bg-red-600': danger && !outline,
        'rounded-full': rounded,
        'bg-white': outline,
        'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white': outline && primary,
        'border-gary-800 text-gray-800 border-gray-800 hover:bg-gray-800 hover:text-white': outline && secondary,
        'border-green-500 text-green-500 hover:bg-green-500 hover:text-white': outline && success,
        'border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-white': outline && warning,
        'border-red-500 text-red-500 hover:bg-red-500 hover:text-white': outline && danger,
    })

    return <button {...rest} className={classes}>{children}</button>
}

Button.propTypes = {
    checkVariationValue: ({ primary, secondary, success, warning, danger }) => {

        const count = Number(!!primary)
            + Number(!!secondary)
            + Number(!!success)
            + Number(!!warning)
            + Number(!!danger)

        if (count > 1) {
            return new Error('Only one of primary, secondary, success, warning, danger can be true');
        }
    }

};

export default Button
