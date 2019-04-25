import PropTypes from "prop-types"

const Theme = ({ children }) => (
    <div>{children}</div>
)

Theme.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.element),
        PropTypes.element,
    ]).isRequired,
}

export default Theme
