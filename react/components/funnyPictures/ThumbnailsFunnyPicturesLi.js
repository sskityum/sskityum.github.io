import React, { Fragment } from 'react'
import { ThumbnailsFunnyPicturesItem } from './ThumbnailsFunnyPicturesItem'
import { ListItem } from '@material-ui/core'
import { ThumbnailsFunnyPicturesLiWinner } from './ThumbnailsFunnyPicturesLiWinner'

export const ThumbnailsFunnyPicturesLi = ({card, index}) => {

    return (
        <Fragment>
            <ThumbnailsFunnyPicturesLiWinner card={card} index={index} />
            <li className={`rounded float-left img-thumbnail li-style ${card.style}`}>
                <img 
                    src={card.cardUrl} 
                    className="img-style" 
                    alt={card.text} 
                ></img>
                <ul className="like-counter-loc">
                    <ThumbnailsFunnyPicturesItem index={index} />
                    <ListItem className="likesNumber-loc">
                        <h4 className="display-6 text-center">{card.likesNumber}</h4>
                    </ListItem>
                    <ListItem className="source-loc">
                        <p className="h6">{card.source}</p>
                    </ListItem>
                </ul>
            </li>
        </Fragment>
    )
}