import React from 'react'
import { ListItem } from '@material-ui/core'

import bgUrl from '../../data/funny_pictures/cup-1614530_640.png'

const style = {
    width: '100%',
    height: '700px',
    color: 'blue',
    background: `50% 50%/800px 500px no-repeat url(${bgUrl})`,
    opacity: '0.2'
}

export const WinnerBackground = () => {
    return (
        <ListItem style={style}>
        </ListItem>        
    )
}