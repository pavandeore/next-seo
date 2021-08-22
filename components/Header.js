import React from 'react';
import HeaderStyles from '../styles/Header.module.css';

const Header = () => {
    return (
        <div>
            <h1 className={HeaderStyles.title}><span>Web Dev</span> Header</h1>
            <p className={HeaderStyles.description}>This is description and also part of header comompoenent</p>
            
            
            {/* <style jsx>
                {`
                .title{
                    color: red;
                }
                `}
            </style> */}
        </div>
    );
};

export default Header;