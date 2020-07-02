import React from 'react'
import {NavLink} from 'react-router-dom'

export const Navbar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            Navi
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/"
                    exact
                >
                    Главная
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/galery"
                >
                    Котогалерея
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/todo"
                >
                    Составить список
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink 
                    className="nav-link" 
                    to="/funnyPictures"
                >
                    Смешные картинки
                </NavLink>
            </li>
        </ul>
    </nav>
)