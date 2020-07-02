import React, { useState, useEffect } from 'react'
import {CSSTransition} from 'react-transition-group'

import saverLeftUrl from '../../data/home_page/Vietnam_p_7_left.png'

export const SaverLeft = () => {
    const [style, setStyle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStyle(true)
        }, 1500)
    }, [])

    return (
        <CSSTransition
            in={style}
            classNames={'saver-left'}
            timeout={800}
            mountOnEnter
        >
            <img src={saverLeftUrl} className="img-fluid saver-left" alt="заставка"></img>
        </CSSTransition>
    )
}