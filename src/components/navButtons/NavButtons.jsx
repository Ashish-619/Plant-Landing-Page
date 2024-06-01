import React from 'react';
import style from './NavButtons.module.css';

const NavButtons = () => {
    return (
        <div className={style.navButtonsContainer}>
            <button className={style.button}>All</button>
            <button className={style.button}>Cactus</button>
            <button className={style.button}>Rose</button>
            <button className={style.button}>Lily</button>
            <div className={style.button}>
                <span>Monsera</span>
                <span className={style.badge}>New</span>
            </div>
        </div>
    );
}

export default NavButtons;
