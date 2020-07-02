import React, { useEffect, useState } from 'react'
import {CSSTransition} from 'react-transition-group'

import saverUrl from '../../data/home_page/Vietnam_p_7.png'

export const Saver = () => {
    const [style, setStyle] = useState(false)

    useEffect(() => {
        setStyle(true)
    }, [])

    return (
        <CSSTransition
            in={style}
            classNames={'saver'}
            timeout={1500}
            mountOnEnter
        >
            <img src={saverUrl} className="img-fluid saver" alt="заставка"></img>
        </CSSTransition>
    )
}