import React from 'react'
import Title from '@components/Atom/Title'
import ContentComic from '@components/ContentComic'
import Header from '@components/Layouts/Header'
import { useSelector } from 'react-redux'
import MainStyles from '../styles/style.module.scss'

const ViewComicPage = () => {
    const selectTo = useSelector((state: any) => state.dataComic.comicInfo.comic)

    return (
        <>
            <Header search={false} />
            <div className={MainStyles.main__container}>
                <Title>{selectTo?.title ? selectTo?.title : 'Undefined'}</Title>
                <ContentComic comic={selectTo} />
            </div>
        </>
    )
}

export default ViewComicPage