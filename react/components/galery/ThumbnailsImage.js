import React, {useContext} from 'react'

import {photosUrl} from '../../constants/galeryConst'
import { GaleryContext } from '../../context/galery/galeryContext'

export const ThumbnailsImage = () => {
    const {changeIndex} = useContext(GaleryContext)
    
    return photosUrl.map((url, index) => {
        return  <img 
                    src={url} 
                    className="rounded float-left img-thumbnail img-w-ti" 
                    alt="Котишко" 
                    key={index}
                    onClick={() => changeIndex(index)}
                ></img>
    })
}