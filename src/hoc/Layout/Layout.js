import React, { useState } from "react";
import styles from "./Layout.module.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

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
