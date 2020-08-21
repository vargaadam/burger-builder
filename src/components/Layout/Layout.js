import React from 'react'
import classess from './Layout.module.css'

function Layout(props) {
    return (
        <React.Fragment>
            <div>Toolbar, SideDrawer, Backdrop</div>
            <main className={classess.Content}>
                {props.children}
            </main>
        </React.Fragment>
    )
}

export default Layout
