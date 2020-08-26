import React from "react";
import styles from "./BurgerBuildControl.module.css";
import PropTypes from "prop-types";

function BurgerBuildControl(props) {
  return (
    <div className={styles.BurgerBuildControl}>
      <div className={styles.Label}>{props.label}</div>
      <button
        className={styles.Less}
        onClick={props.removed}
        disabled={props.isDisabled}
      >
        Less
      </button>
      <button className={styles.More} onClick={props.added}>
        More
      </button>
    </div>
  );
}

BurgerBuildControl.propTypes = {
  label: PropTypes.string.isRequired,
  isDisabled: PropTypes.bool.isRequired,
  added: PropTypes.func.isRequired,
  removed: PropTypes.func.isRequired,
};

export default BurgerBuildControl;
