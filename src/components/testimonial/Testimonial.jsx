import React from 'react'
import style from './Testimonial.module.css'

const Testimonial = () => {
    return (
        <div className={style.testimonialContainer}>
            <div className={style.leftText}>
                <h2>&quot; Testimonial <br /> Highlight &quot;</h2>
                <p>My house became cooler and calmer by adding many beautiful plants and very comfortable to look at</p>
                <h3>Sila Marsilih</h3>
                <span>Artist</span>
                <div className={style.carouselButton}>
                    <button>&lt;</button>
                    <button>&gt;</button>
                </div>
            </div>
            <img src="../../../public/images/bonsai.png" />
        </div>
    )
}

export default Testimonial