import React, {useState} from 'react'

import {FunnyPicturesContext} from './funnyPicturesContext'
import {funnyPicturesData} from '../../constants/funnyPicturesConst'

const findMaxNum = (arr) => {
    const initialValue = {
        maxNum: 0,
        index: null
    }

    const objMaxNum = arr.reduce(
        (accumulator, currentValue, index) => accumulator.maxNum < currentValue.likesNumber ? {maxNum: currentValue.likesNumber, index } : accumulator,
        initialValue
    )
    return objMaxNum
}

const firstThreeWinners = (arr) => {
    const arrayLikeCounters = []

    arr.map(data => {
        const likeObj = {}
        likeObj.id = data.id
        likeObj.likesNumber = data.likesNumber
        arrayLikeCounters.push(likeObj)
        data.winner = false
        data.style = ''
        return data
    })

    if (findMaxNum(arrayLikeCounters).index !== null) {
        const i = arrayLikeCounters[findMaxNum(arrayLikeCounters).index].id
        arr[i].style = 'li-first-place'
        arr[i].winner = true
        arrayLikeCounters.splice(findMaxNum(arrayLikeCounters).index, 1)
        if (findMaxNum(arrayLikeCounters).index !== null) {
            const i = arrayLikeCounters[findMaxNum(arrayLikeCounters).index].id
            arr[i].style = 'li-second-place'
            arrayLikeCounters.splice(findMaxNum(arrayLikeCounters).index, 1)
            if (findMaxNum(arrayLikeCounters).index !== null) {
                const i = arrayLikeCounters[findMaxNum(arrayLikeCounters).index].id
                arr[i].style = 'li-third-place'
            }
        }
    }
    return arr
}

export const FunnyPicturesState = ({children}) => {
    const [picData, setPicData] = useState(funnyPicturesData)

    const addLike = (i) => {
        const newPicData = picData.map(data => data.id === i ? {...data, likesNumber: data.likesNumber + 1} : data)

        setPicData (
            firstThreeWinners(newPicData)
        )
    }

    const subLike = (i) => {
        const newPicData = picData.map(data => data.id === i ? {...data, likesNumber: data.likesNumber - 1} : data)

        setPicData (
            firstThreeWinners(newPicData)
        )
    }

    return (
        <FunnyPicturesContext.Provider value={{
            addLike,
            subLike,
            picData
        }}>
            {children}
        </FunnyPicturesContext.Provider>
    )
}