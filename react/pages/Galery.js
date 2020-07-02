import React from 'react'

import {GridRow} from '../components/gridContainers/GridRow'
import {GridCol} from '../components/gridContainers/GridCol'
import {GaleryCarousel} from '../components/galery/GaleryCarousel'
import { Footer } from '../components/footer/Footer'
import { FullImage } from '../components/galery/FullImage'
import { ThumbnailsImage } from '../components/galery/ThumbnailsImage'
import { GaleryState } from '../context/galery/galeryState'
import { FunnyPicturesCarousel } from '../components/funnyPictures/FunnyPicturesCarousel'
import PetsIcon from '@material-ui/icons/Pets'
import DashboardIcon from '@material-ui/icons/Dashboard'
import NotesIcon from '@material-ui/icons/Notes'
import HomeIcon from '@material-ui/icons/Home'
import { ListItem, IconButton } from '@material-ui/core'

export const Galery = () => {
    const styleAside = "2 st-child"
    const styleMain = "10 main-h"
    const styleFooter = "12"
    const styleFi = "12 div-p"
    const styleTi = "12 div-p"

    return (
        <GaleryState>
            <h1>Пушан</h1>
            <GridRow>
                <GridCol style={Object(styleMain)}>
                    <GridRow>
                        <GridCol style={Object(styleFi)}>
                            <FullImage />
                        </GridCol>
                    </GridRow>

                    <GridRow>
                        <GridCol style={Object(styleTi)}>
                            <ThumbnailsImage />
                        </GridCol>
                    </GridRow>
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
        </GaleryState>
    )
}