import React, {useState} from 'react'

import {GaleryContext} from './galeryContext'

export const GaleryState = ({children}) => {
    const [index, setIndex] = useState(1)

    const changeIndex = (ind) => {
        setIndex(ind)
    }

    return (
        <GaleryContext.Provider value={{changeIndex, index}}>
            {children}
        </GaleryContext.Provider>
    )
}