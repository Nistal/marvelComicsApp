import React, { FC, ReactNode } from 'react'
import CardStyles from './style.module.scss'

type TCard = {
    title: string
    children: ReactNode
}
const Card: FC<TCard> = ({ title, children }) => {
    return (
        <div className={CardStyles.card__container}>
            <div className={CardStyles.card__title}>{title.toUpperCase()}</div>
            <div>
                {children}
            </div>
        </div>
    )
}

export default Card
