import React, {useContext, useState, useEffect} from 'react'

import {AddStyleContext} from './addStyleContext'
import {FunnyPicturesContext} from './funnyPicturesContext'

export const AddStyleState = ({children}) => {
    const {picData} = useContext(FunnyPicturesContext)

    const [styleData, setStyleData] = useState(picData)

    const initialValue = {
        maxNum: 0,
        index: null
    }
    const sum = styleData.reduce(
        (accumulator, currentValue, index) => accumulator.maxNum < currentValue.likesNumber ? {maxNum: currentValue.likesNumber, index } : accumulator,
        initialValue
    )

    useEffect(() => {
        setStyleData (
            styleData.map(data => data.id === sum.index ? {...data, style: "li-winner"} : {...data, style: ""})
        )
    }, [sum.index])

    console.log(sum)
    console.log(styleData)

    return (
        <AddStyleContext.Provider value={{styleData}}>
            {children}
        </AddStyleContext.Provider>
    )
}