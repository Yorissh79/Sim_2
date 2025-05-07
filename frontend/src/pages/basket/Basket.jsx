import React, { useEffect } from 'react'
import style from './Basket.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { getBasketThunk } from '../../redux/reducers/basketSlice'
import Backcard from '../../components/backcard/Backcard'

const Basket = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.basket.data)

    useEffect(() => {
        dispatch(getBasketThunk())
    }, [])

    return (
        <div className={style.main}>

            <Backcard who={"basket"} data={data}></Backcard>

        </div>
    )
}

export default Basket