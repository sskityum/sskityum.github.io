import React, { useState, useEffect } from 'react'
import {CSSTransition} from 'react-transition-group'

import saverRightUrl from '../../data/home_page/Vietnam_p_7_right.png'

export const SaverRight = () => {
    const [style, setStyle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStyle(true)
        }, 1500)
    }, [])

    return (
        <CSSTransition
            in={style}
            classNames={'saver-right'}
            timeout={800}
            mountOnEnter
        >
            <img src={saverRightUrl} className="img-fluid saver-right" alt="заставка"></img>
        </CSSTransition>
    )
}