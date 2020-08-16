import PropTypes from "prop-types";
import React, { memo } from "react";

const Button = ({ text, active, onClick }) => {
  const className = ["btn"];
  active && className.push("btn--active");

  return (
    <button className={className.join(" ")} onClick={onClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  active: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

export default memo(Button);
