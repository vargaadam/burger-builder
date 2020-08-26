import React, { useState } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

function Layout(props) {
  const [drawerState, setDrawerState] = useState(true);

  const sideDrawerCloseHandler = () => {
    setDrawerState(false);
  };

  const sideDrawerChangeHandler = () => {
    setDrawerState((prevState) => !prevState);
  };

  return (
    <React.Fragment>
      <Toolbar sideDrawerChanged={sideDrawerChangeHandler} />
      <SideDrawer open={drawerState} closed={sideDrawerCloseHandler} />
      <main className={styles.Content}>{props.children}</main>
    </React.Fragment>
  );
}

export default Layout;
