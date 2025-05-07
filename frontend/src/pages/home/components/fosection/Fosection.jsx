import React, { useEffect } from 'react'
import style from './Fosection.module.scss'
import Backcard from '../../../../components/backcard/Backcard'
import { useDispatch, useSelector } from 'react-redux'
import { getCardThunk } from '../../../../redux/reducers/cardSlice'

const Fosection = () => {

    const dispatch = useDispatch()
    const data = useSelector(state => state.card.data)

    useEffect(() => {
        dispatch(getCardThunk())
    }, [])

    return (
        <div className={style.main}>
            <div className={style.text}>
                <h2>News</h2>
                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>

            <Backcard who={"home"} data={data}/>
        </div>
    )
}

export default Fosection