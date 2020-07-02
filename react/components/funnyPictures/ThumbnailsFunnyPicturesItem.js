import React, { useState, useContext } from 'react'
import { ListItem, IconButton } from '@material-ui/core'
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined'
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import {CSSTransition} from 'react-transition-group'
import { FunnyPicturesContext } from '../../context/funnyPictures/funnyPicturesContext'

export const ThumbnailsFunnyPicturesItem = ({index}) => {
    const {addLike, subLike} = useContext(FunnyPicturesContext)
    const [iconStyleUp, setIconStyleUp] = useState(false)
    const [iconStyleDown, setIconStyleDown] = useState(false)

    const addLikeAnimateIcon = (i) => {
        addLike(i)
        setIconStyleUp(true)
        setTimeout(() => {
            setIconStyleUp(false)
        }, 200)
    }

    const subLikeAnimateIcon = (i) => {
        subLike(i)
        setIconStyleDown(true)
        setTimeout(() => {
            setIconStyleDown(false)
        }, 200)
    }

    return (
        <ListItem className="like-loc">
            <IconButton 
                className="icon-button"
                onClick={() => addLikeAnimateIcon(index)} 
            >
                <ThumbUpAltOutlinedIcon  
                    fontSize="small" 
                    color="primary"
                />
            </IconButton>
            <CSSTransition
                in={iconStyleUp}
                timeout={500}
                classNames={'heart-style-up'}
                mountOnEnter
                unmountOnExit
            >
                <FavoriteBorderIcon  fontSize="small" color="secondary" className="heart-style-up" />
            </CSSTransition>
            <FavoriteBorderIcon fontSize="small" color="primary" className="heart-style-primary" />
            <CSSTransition
                in={iconStyleDown}
                timeout={500}
                classNames={'heart-style-down'}
                mountOnEnter
                unmountOnExit
            >
                <FavoriteBorderIcon  fontSize="small" color="primary" className="heart-style-down" />
            </CSSTransition>
            <IconButton 
                className="icon-button"
                onClick={() => subLikeAnimateIcon(index)} 
            >
                <ThumbDownAltOutlinedIcon  
                    fontSize="small" 
                    color="primary" 
                />
            </IconButton>
        </ListItem>
    )
}