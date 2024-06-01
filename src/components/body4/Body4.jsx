import React from 'react';
import style from './Body4.module.css';

const Body4 = ({ plants }) => {
    return (
        <div className={style.boxContainer}>
            {/* Map over the plants array to generate cards */}
            {plants.map((plant, index) => (
                <div key={index} className={style.card}>
                    <img className={style.mainImage} src={`../../../public/images/Plant 2.png`} alt='Plant' />
                    <div className={style.textArea}>
                        <p><b>{plant.name}</b></p>
                        <div className={style.priceContainer}>
                            <p>${plant.price}</p>
                            <div className={style.bagIconContainer}>
                                <img src='../../../public/images/bag.png' alt='Bag' />
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Body4;
