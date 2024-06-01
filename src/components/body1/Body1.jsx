import React from 'react';
import style from './Body1.module.scss';

const Body1 = () => {
  return (
    <div className={style.mainContainer}>
      <div className={style.leftCard}>
        <pre>{`Make your\nhome\n`}<span>beautiful</span>{`\nwith plants`}</pre>
        <p>A cozy home is a home decorated with the freshness of green and fresh plants, come on, check out all our plants, don't run out</p>
        <button>Learn More</button>
      </div>
      <div className={style.rightCard}>
        <img src='../../../public/images/Plant 2.png' alt='plant' />
        <div className={style.rightCardInner}>
          <div className={style.fontContent}>
            <h2>PisumSativum</h2>
            <p>Monsera</p>
            <a>LEARN MORE</a>
          </div>
          <img src='../../../public/images/Plant 2.png' alt='plant' />
        </div>
      </div>
    </div>
  );
}

export default Body1;
