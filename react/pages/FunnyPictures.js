import React from 'react'

import {GridRow} from '../components/gridContainers/GridRow'
import {GridCol} from '../components/gridContainers/GridCol'
import {GaleryCarousel} from '../components/galery/GaleryCarousel'
import { Footer } from '../components/footer/Footer'
import { FunnyPicturesCarousel } from '../components/funnyPictures/FunnyPicturesCarousel'
import { ThumbnailsFunnyPictures } from '../components/funnyPictures/ThumbnailsFunnyPictures'
import { ListItem, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import PetsIcon from '@material-ui/icons/Pets'
import DashboardIcon from '@material-ui/icons/Dashboard'
import NotesIcon from '@material-ui/icons/Notes'
import { FunnyPicturesState } from '../context/funnyPictures/FunnyPicturesState'
import { WinnerBackground } from '../components/funnyPictures/WinnerBackground'

export const FunnyPictures = () => {
    const styleAside = "2 st-child"
    const styleMain = "10 main-h"
    const styleFooter = "12"

    return (
        <FunnyPicturesState>
            <h1>Funny pictures page</h1>
            <GridRow>
                <GridCol style={Object(styleMain)}>
                    <ul className="ul-style col-12">
                        <WinnerBackground />
                        <ThumbnailsFunnyPictures />
                    </ul>
                </GridCol>
                <GridCol style={Object(styleAside)}>
                    <ListItem className="arr-elem">
                        <IconButton className="icon-button">
                            <HomeIcon fontSize="large" color="primary"/>
                        </IconButton>
                        <h1 className="display-4 text-center m-logo">SSP</h1>
                    </ListItem>
                    <ListItem className="arr-elem">
                        <IconButton className="icon-button">
                            <PetsIcon fontSize="large" color="primary"/>
                        </IconButton>
                        <GaleryCarousel />
                    </ListItem>
                    <ListItem className="arr-elem">
                        <IconButton className="icon-button">
                            <NotesIcon fontSize="large" color="primary"/>
                        </IconButton>
                        <h1 className="display-6 text-center">todo</h1>
                    </ListItem>
                    <ListItem className="arr-elem">
                        <IconButton className="icon-button">
                            <DashboardIcon fontSize="large" color="primary"/>
                        </IconButton>
                        <FunnyPicturesCarousel />
                    </ListItem>
                </GridCol>
            </GridRow>
            <GridRow>
                <GridCol style={Object(styleFooter)}>
                    <Footer />
                </GridCol>
            </GridRow>
        </FunnyPicturesState>
    )
}