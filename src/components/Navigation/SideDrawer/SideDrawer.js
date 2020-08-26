import React from "react";

import Logo from "../../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import BackDrop from "../../UI/Backdrop/Backdrop";
import styles from "./SideDrawer.module.css";

function SideDrawer(props) {
  let attachedStyles = [styles.SideDrawer, styles.Close];

  if (props.open) {
    attachedStyles = [styles.SideDrawer, styles.Open];
  }

  return (
    <React.Fragment>
      <BackDrop show={props.open} clicked={props.closed}></BackDrop>
      <div className={attachedStyles.join(" ")}>
        <Logo height="10%" />
        <NavigationItems />
      </div>
    </React.Fragment>
  );
}

export default SideDrawer;
