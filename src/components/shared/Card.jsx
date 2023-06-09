import PropTypes from "prop-types";
import React from "react";
// REUSABLE STYLE COMPONTENT
const Card = ({ children, reverse }) => {
  return <div className={`card ${reverse && "reverse"}`}>{children}</div>;
};

Card.defaultProps = {
  reverse: false,
};
Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Card;

// line 4: Conditional Class
