import Card from '@components/Atom/Card'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import ContentComicStyles from './style.module.scss'

const ContentComic = ({ comic }: any) => {
    const router = useRouter()
    return (
        <div className={ContentComicStyles.container}>
            <div className={ContentComicStyles.imageNext}>
                <Image
                    src={comic === undefined ? '' : `${comic?.thumbnail?.path.concat('.', comic?.thumbnail?.extension)}`}
                    alt={comic?.title}
                    width={590}
                    height={590}
                />
            </div>
            <div className={ContentComicStyles.card__container}>
                <Card title='Description'>
                    <p className={ContentComicStyles.desc}>
                        {comic === undefined ? <h4 className={ContentComicStyles.characters__notFound}>N/D</h4> : comic?.description}
                    </p>
                </Card>
                <Card title='Characters'>
                    <div className={ContentComicStyles.characters__map}>
                        {comic?.characters?.items?.length > 0
                            ? comic?.characters?.items?.map((character: any, key: number) => (
                                <span
                                    className={ContentComicStyles.characters__span}
                                    key={key}
                                >
                                    {character.name}
                                </span>
                            ))
                            : <h4 className={ContentComicStyles.characters__notFound}>No characters found</h4>}
                    </div>
                </Card>
                <Card title='variants'>
                    <div className={ContentComicStyles.characters__map}>
                        {comic?.variants.length > 0
                            ? comic?.variants.map((variant: any, key: number) => (
                                <span
                                    className={ContentComicStyles.characters__spanVariants}
                                    key={key}
                                >
                                    {variant.name}
                                </span>
                            ))
                            : <h4 className={ContentComicStyles.characters__notFound}>No variants found</h4>}
                    </div>
                </Card>
                <button className={ContentComicStyles.button} onClick={() => router.push('/')}>Go back</button>
            </div>
        </div>
    )
}

export default ContentComic
