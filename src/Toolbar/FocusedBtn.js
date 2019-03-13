import React from "react";
import PropTypes from "prop-types";

const FocusedBtn = props => (
  <span
    onMouseDown={event => {
      event.preventDefault();
      props.toggleFunction(event);
    }}
  >
    {props.children}
  </span>
);

FocusedBtn.propTypes = {
  toggleFunction: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired
};
export default FocusedBtn;
