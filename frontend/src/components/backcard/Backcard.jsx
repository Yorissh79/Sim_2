import React from 'react'
import style from './Backcard.module.scss'
import Card from './components/card/Card'

const Backcard = ({who, data}) => {
    
    return (
        <div className={style.main}>
            
            {data?.map(item => <Card item={item} who={who}/>)}

        </div>
    )
}

export default Backcard