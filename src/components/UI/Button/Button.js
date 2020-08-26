import React from "react";
import PropTypes from "prop-types";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <div
      className={[styles.Button, styles[props.type]].join(" ")}
      onClick={props.clicked}
    >
      {props.children}
    </div>
  );
}

Button.propTypes = {
  type: PropTypes.oneOf(["Danger", "Success"]).isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Button;
