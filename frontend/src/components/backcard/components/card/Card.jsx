import React from 'react'
import style from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { deleteCardThunk, getCardThunk } from '../../../../redux/reducers/cardSlice'

const Card = ({item, who}) => {

    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(deleteCardThunk(item._id))
    }

    return (
        <div className={style.main}>

            <div className={style.imgbox}>
                <img src={item.image} alt="" /> 
            </div>            

            <div className={style.text}>
                <p className={style.f}>${item.price}</p>
                <p className={style.s}>{item.name}</p>
                <p className={style.t}>{item.des}</p>

                {who == "admin" ? <button onClick={() => deleteItem()}>Delete</button> : ""}
                {who == "home" ? <button>Add to basket</button> : ""}
            </div>


        </div>
    )
}

export default Card