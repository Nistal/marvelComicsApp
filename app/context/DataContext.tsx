import React, { createContext, FC, ReactNode, useState } from 'react'

export const DataContext = createContext({})

type TDataProvider = {
    children: ReactNode
}
const DataProvider: FC<TDataProvider> = ({ children }) => {
    const [state, setState] = useState('')
    return (
        <DataContext.Provider value={{ state, setState }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider
