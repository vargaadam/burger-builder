import React from "react";
import PropTypes from "prop-types";
import styles from "./Backdrop.module.css";

function Backdrop(props) {
  return props.show ? (
    <div className={styles.Backdrop} onClick={props.clicked}></div>
  ) : null;
}

Backdrop.propTypes = {
  show: PropTypes.bool.isRequired,
  clicked: PropTypes.func.isRequired,
};

export default Backdrop;
