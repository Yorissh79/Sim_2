import React from 'react'
import style from './Fsection.module.scss'

const Fsection = () => {
    return (
        <div className={style.main}>
            <p className={style.f}>Welcome To EatWell</p>
            <p className={style.s}>Come and eat well with our delicious & healthy foods.</p>
            <button>Reservation</button>
        </div>
    )
}

export default Fsection