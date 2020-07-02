import React, { useState, useEffect } from 'react'
import { ListItem, IconButton } from '@material-ui/core'

import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify'
import { CSSTransition } from 'react-transition-group'

export const Logo = () => {
    const [style, setStyle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStyle(true)
        }, 3000)
    }, [])

    return (
        <CSSTransition
            in={style}
            classNames={'logo'}
            timeout={500}
            mountOnEnter
        >
            <ListItem className="arr-elem logo">
                <h1 className="display-4 text-center m-logo">SSP</h1>
                <IconButton className="icon-button">
                    <FormatAlignJustifyIcon />
                </IconButton>
            </ListItem>
        </CSSTransition>
    )
}