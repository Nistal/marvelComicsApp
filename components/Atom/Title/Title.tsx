import React, { FC, ReactNode } from 'react'
import TitleStyle from './style.module.scss'

type TTitle = {
    children: ReactNode
}
const Title: FC<TTitle> = ({ children }) => {
    return (
        <div className={TitleStyle.title}>
            {children}
        </div>
    )
}

export default Title