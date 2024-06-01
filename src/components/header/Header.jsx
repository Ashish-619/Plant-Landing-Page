import React from 'react';
import favIcon from '../../../public/images/letter-y.png';
import style from './Header.module.scss';

const Header = () => {
  return (
    <div className={style.headerContainer}>
      <div className={style.leftPart}>
        <img src={favIcon} alt="Logo" />
        <span>Planity.</span>
      </div>
      <div className={style.middlePart}>
        <ul>
          <li><a>HOME</a></li>
          <li><a>SHOP</a></li>
          <li><a>ABOUT US</a></li>
          <li><a>CONTACT</a></li>
        </ul>
      </div>
      <div className={style.rightPart}>
        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;