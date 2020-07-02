import React, {Fragment} from 'react'

import {GridRow} from '../components/gridContainers/GridRow'
import {GridCol} from '../components/gridContainers/GridCol'
import {GaleryCarousel} from '../components/galery/GaleryCarousel'
import { Footer } from '../components/footer/Footer'
import { FunnyPicturesCarousel } from '../components/funnyPictures/FunnyPicturesCarousel'
import HomeIcon from '@material-ui/icons/Home'
import IconButton from '@material-ui/core/IconButton'
import ListItem from '@material-ui/core/ListItem'
import PetsIcon from '@material-ui/icons/Pets'
import DashboardIcon from '@material-ui/icons/Dashboard'
import NotesIcon from '@material-ui/icons/Notes'
import { Saver } from '../components/home/Saver'
import { SaverRight } from '../components/home/SaverRight'
import { SaverLeft } from '../components/home/SaverLeft'
import { Logo } from '../components/home/Logo'
import { Strap } from '../components/home/Strap'

export const Home = () => {
    const styleAside = "2 st-child"
    const styleMain = "10 main-h"
    const styleFooter = "12"
    const styleTopBar = "12 topbar-h"
    const styleSaver = "12 saver-h"
    const styleStrap = "12 strap-h"

    return (
        <Fragment>
            <h1>Home page</h1>
            <GridRow>
                <GridCol style={Object(styleMain)}>
                    <GridRow>
                        <GridCol style={Object(styleTopBar)}>
                            <Logo />
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol style={Object(styleSaver)}>
                            <SaverLeft />
                            <Saver />
                            <SaverRight />
                        </GridCol>
                    </GridRow>
                    <GridRow>
                        <GridCol style={Object(styleStrap)}>
                            <Strap />
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
        </Fragment>
    )
}