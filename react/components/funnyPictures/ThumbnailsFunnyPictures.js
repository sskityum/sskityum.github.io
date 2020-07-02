import React, {useContext} from 'react'

import { FunnyPicturesContext } from '../../context/funnyPictures/funnyPicturesContext'
import { ThumbnailsFunnyPicturesLi } from './ThumbnailsFunnyPicturesLi'

export const ThumbnailsFunnyPictures = () => {
    const {picData} = useContext(FunnyPicturesContext)

    return picData.map((card, index) => {
        
        return (
            <ThumbnailsFunnyPicturesLi card={card} index={index} key={index} />
        ) 
    })
}