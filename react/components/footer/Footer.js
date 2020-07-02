import React from 'react'
import { ListItem } from '@material-ui/core'

import TwitterIcon from '@material-ui/icons/Twitter'
import TelegramIcon from '@material-ui/icons/Telegram'
import EmailIcon from '@material-ui/icons/Email'
import Icon24LogoVk from '@vkontakte/icons/dist/24/logo_vk'
import { Modal } from '../modal/Modal'

export const Footer = () => {
    return (
        <div className="card text-center">
            <div className="card-footer text-muted">
            <ul className="list-group list-group-horizontal">
                <ListItem className="icon-poz">
                    <a href="https://vk.com/id559960559" className="badge badge-light">
                        <Icon24LogoVk />
                    </a>
                </ListItem>
                <ListItem className="icon-poz">
                    <a href="https://twitter.com/tot7BaJPud17CSG" className="badge badge-light">
                        <TwitterIcon />
                    </a>
                </ListItem>
                <ListItem className="icon-poz">
                    <a href="https://t.me/sskityum" className="badge badge-light">
                        <TelegramIcon />
                    </a>
                </ListItem>
                <ListItem className="icon-poz">
                    <a href="mailto:sskityum@gmail.com" className="badge badge-light">
                        <EmailIcon />
                    </a>
                </ListItem>
                <ListItem className="icon-poz">
                    <Modal />
                </ListItem>
            </ul>
            </div>
        </div>
    )
}