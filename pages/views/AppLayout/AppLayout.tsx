import React from 'react'
import Footer from '@components/Layouts/Footer'
import Header from '@components/Layouts/Header'
import MainApp from '@components/Layouts/MainApp'

const AppLayout = () => {
    return (
        <div>
            <Header />
            <MainApp />
            <Footer />
        </div>
    )
}

export default AppLayout
