import Title from '@components/Atom/Title'
import MainContent from '@components/MainContent'
import React from 'react'
import MainStyles from './style.module.scss'

const MainApp = () => {
  return (
    <div className={MainStyles.main__container}>
      <Title>Comic List</Title>
      <MainContent />
    </div>
  )
}

export default MainApp
