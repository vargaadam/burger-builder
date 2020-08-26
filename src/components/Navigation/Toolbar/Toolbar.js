import React from "react";
import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";

function Toolbar(props) {
  return (
    <header className={styles.Toolbar}>
      <div onClick={props.sideDrawerChanged}>Menu</div>
      <Logo height="80%" />
      <div className={styles.DesktopOnly}>
        <NavigationItems />
      </div>
    </header>
  );
}

export default Toolbar;
