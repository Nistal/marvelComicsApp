import React, { FC } from 'react'
import ComicListStyle from './style.module.scss'
import { useDispatch } from 'react-redux'
import { saveComic } from 'app/slices/comicsSlice'
import { useRouter } from 'next/router'

type TComicList = {
    comic: any
}
const ComicList: FC<TComicList> = ({ comic }) => {
    const dispatch = useDispatch()
    const router = useRouter()
    return (
        <li className={ComicListStyle.comic__li} onClick={() => [dispatch(saveComic({ comic })), router.push('/view-comic')]}>
            {comic.title}
        </li>
    )
}

export default ComicList