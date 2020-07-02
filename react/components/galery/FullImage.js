import React, {useContext} from 'react'

import {photosUrl} from '../../constants/galeryConst'
import { GaleryContext } from '../../context/galery/galeryContext'

// 1 способ включить локальное изображение
// import logo_2 from '../../../public/cat_gallery/IMG_0030.JPG'

// 2 способ включить локальное изображение, недостаток - 
// думать о разрушении кэша и следить за перемещением или удалением файлов самостоятельно
// Assuming logo.png is in public/ folder of your project
// <img src={process.env.PUBLIC_URL + '/logo.png'} alt="logo" />

export const FullImage = () => {
    const {index} = useContext(GaleryContext)
    const url = photosUrl[index]

    return (
        <img src={url} className="img-fluid img-w-fi img-thumbnail" alt="Котишко"></img>
    )
}

