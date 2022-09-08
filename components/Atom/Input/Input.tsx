import React, { useMemo } from 'react'
import InputStyle from './style.module.scss'

type TWidth = 'sm' | 'md' | 'lg' | 'xl'
interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    width: TWidth
    placeholder?: string
}
const Input = (props: IInputProps) => {
    const width = useMemo(() => {
        switch (props.width) {
            case 'sm':
                return '120px'
            case 'md':
                return '240px'
            case 'lg':
                return '360px'
            case 'xl':
                return '480px'
            default:
                break;
        }
    }, [props.width])

    return (
        <div className={InputStyle.container__input}>
            <input style={{ width: width }} {...props} className={InputStyle.input } />
        </div>
    )
}

export default Input
