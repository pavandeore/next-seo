import React from 'react';

import Nav from './Nav';
import Meta from './Meta';

import Header from './Header';

import styles from '../styles/Layout.module.css';

const Layout = ({children}) => {
    return (
    <>
        <Meta />
        <Nav />
        <Header />
        <div className={styles.container}>

            {children}

        </div>
    </>
    );
};

export default Layout;