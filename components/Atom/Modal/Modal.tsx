import React from 'react'
import Title from '../Title'
import ModalStyle from './style.module.scss'

const Modal = () => {
    return (
        <div className={ModalStyle.modal}>
            <div className={ModalStyle.modal__Container}>
                <Title>Titulo del comic</Title>
                <div className={ModalStyle.modal__body}>
                    <p>Body</p>
                    <p>Body</p>
                    <p>Body</p>
                    <p>Body</p>
                </div>
                <button className={ModalStyle.modal__Button}>
                    Close
                </button>
            </div>
        </div>
    )
}

export default Modal