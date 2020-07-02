import React, {Fragment, useState} from 'react'
import {YMaps, Map} from 'react-yandex-maps'

import MapIcon from '@material-ui/icons/Map'
import { IconButton } from '@material-ui/core'


export const Modal = () => {
    const [viewMap, setViewMap] = useState(false)   

    return (
        <Fragment>
            <IconButton className="icon-button" onClick={() => setViewMap(true)}>
                <MapIcon />
            </IconButton>
            {viewMap && (<div className='modal'>
                <div className='modal-body'>
                    <div className="modal-header">
                        <h5 className="modal-title">Карта</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={() => setViewMap(false)}>
                        <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <YMaps style={{width: '100%', height: '100%'}}>
                        <Map 
                            style={{width: '100%', height: '85%', outline: 'auto'}} 
                            defaultState={{center: [57.177745, 65.557736], zoom: 17}}
                        />
                    </YMaps>
                </div>
            </div>)}
        </Fragment>
    )
}