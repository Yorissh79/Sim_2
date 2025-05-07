import React from 'react'
import style from './Fisection.module.scss'

const Fisection = () => {
    return (
        <div className={style.main}>
            <div className={style.text}>
                <h2>Gallery</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>    

            <div className={style.imgbox}>
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_1.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_2.jpg" alt="" />
                <img src="https://preview.colorlib.com/theme/eatwell/images/menu_3.jpg" alt="" />
            </div>

        </div>
    )
}

export default Fisection