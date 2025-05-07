import React from 'react'
import style from './Card.module.scss'
import { useDispatch } from 'react-redux'
import { deleteCardThunk } from '../../../../redux/reducers/cardSlice'
import { deleteBasketThunk, postBasketThunk } from '../../../../redux/reducers/basketSlice'

const Card = ({item, who}) => {

    const dispatch = useDispatch()

    const deleteItem = () => {
        dispatch(deleteCardThunk(item._id))
    }

    const deleteItemBas = () => {
        dispatch(deleteBasketThunk(item._id))
    }

    const addBasket = () => {
        dispatch(postBasketThunk(item))
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
                {who == "basket" ? <button onClick={() => deleteItemBas()}>Delete</button> : ""}
                {who == "home" ? <button onClick={() => addBasket()}>Add to basket</button> : ""}
            </div>


        </div>
    )
}

export default Card