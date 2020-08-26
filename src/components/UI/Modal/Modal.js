import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

function Modal(props) {
  return (
    <React.Fragment>
      <Backdrop show={props.show} clicked={props.closed}></Backdrop>
      <div
        className={styles.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        {props.children}
      </div>
    </React.Fragment>
  );
}

Modal.propTypes = {
  show: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired,
};

export default React.memo(Modal, (props, nextProps) => {
  return props.show === nextProps.show;
});
