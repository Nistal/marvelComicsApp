import React, { FC, ReactNode } from 'react'
import ButtonStyle from './style.module.scss'

type TButton = {
    children: ReactNode
}
const Button: FC<TButton> = ({ children }) => {
    return (
        <button className={ButtonStyle.button}>
            {children}
        </button>
    )
}

export default Button