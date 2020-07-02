import React, {Fragment, useContext, useEffect} from 'react'

import {GridRow} from '../components/gridContainers/GridRow'
import {GridCol} from '../components/gridContainers/GridCol'
import {GaleryCarousel} from '../components/galery/GaleryCarousel'
import { Footer } from '../components/footer/Footer'
import { Form } from '../components/todo/Form'
import {Notes} from '../components/todo/Notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import { Loader } from '../components/loader/Loader'
import {Alert} from '../components/todo/Alert'
import { FunnyPicturesCarousel } from '../components/funnyPictures/FunnyPicturesCarousel'
import { ListItem, IconButton } from '@material-ui/core'
import HomeIcon from '@material-ui/icons/Home'
import PetsIcon from '@material-ui/icons/Pets'
import DashboardIcon from '@material-ui/icons/Dashboard'
import NotesIcon from '@material-ui/icons/Notes'

export const Todo = () => {
    const {loading, notes, fetchNotes} = useContext(FirebaseContext)

    const styleAside = "2 st-child"
    const styleMain = "10 main-h"
    const styleFooter = "12"

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, [])

    return (
        <Fragment>
            <h1>Todo page</h1>
            <GridRow>
                <GridCol style={Object(styleMain)}>
                    <Alert />
                    <Form />

                    <hr />

                    {loading
                        ? <Loader />
                        : <Notes notes={notes} />
                    }
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