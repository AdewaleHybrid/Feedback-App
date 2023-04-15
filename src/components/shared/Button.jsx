import React from "react";
import PropTypes from "prop-types";

const Button = ({ children, version, type, disabled }) => {
  return (
    <button type={type} disabled={disabled} className={disabled ? `btn-disabled` : `btn-${version}`}>
      {children}
    </button>
  );
};
Button.defaultProps = {
  version: "primary",
  disabled: false,
  type: "button",
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
};
export default Button;
