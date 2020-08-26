import React from "react";
import PropTypes from "prop-types";
import logo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css";

function Logo(props) {
  return (
    <div className={styles.Logo} style={{ height: props.height }}>
      <img src={logo} alt="BurgerBuilder"></img>
    </div>
  );
}

Logo.propTypes = {
  height: PropTypes.string.isRequired,
};

export default Logo;
