import React, { useEffect, useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ListItem } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'

export const ThumbnailsFunnyPicturesLiWinner = ({card}) => {
    const [showCard, setShowCard] = useState(false)

    useEffect(() => {
        setShowCard(false)
        setTimeout(() => {
            setShowCard(true)
        }, 1000)
    }, [card.winner])

    if (card.winner) {
        return (
            <CSSTransition
                in={showCard}
                timeout={5000}
                classNames={'li-winner'}
                mountOnEnter
                unmountOnExit
            >
                <li className={`rounded float-left img-thumbnail li-style li-winner`}>
                    <img 
                        src={card.cardUrl} 
                        className="img-style" 
                        alt={card.text} 
                    ></img>
                    <ul className="like-counter-loc">
                        <ListItem>
                            <FavoriteBorderIcon  fontSize="large" color="secondary" className="heart-style-up" />
                            <h1 className="display-6 text-center">{card.likesNumber}</h1>
                        </ListItem>
                        <ListItem>
                            <p className="h2"><strong>{card.source}</strong></p>
                        </ListItem>
                    </ul>
                </li>
            </CSSTransition>
        )
    } else {
        return null
    }
}