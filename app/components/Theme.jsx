import PropTypes from "prop-types"

function Theme(props) {
    const { children } = props

    return (
        <div>{children}</div>
    )
}

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired,
}

export default Theme
