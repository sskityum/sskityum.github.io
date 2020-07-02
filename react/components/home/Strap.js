import React, { useState, useEffect } from 'react'
import { CSSTransition } from 'react-transition-group'

export const Strap = () => {
    const [style, setStyle] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setStyle(true)
        }, 3000)
    }, [])

    return (
            <div className="jumbotron jumbotron-fluid cont-jumb">
                <CSSTransition
                    in={style}
                    classNames={'strap'}
                    timeout={500}
                    mountOnEnter
                >
                    <div className="container strap">
                        <h3 className="display-6">У нас в деревне программистом называют того, кто умеет включать компьютер...</h3>
                        <p className="lead">«Делай, что можешь, с тем, что имеешь, там, где ты есть…», - Теодор Рузвельт</p>
                    </div>
                </CSSTransition>
            </div>
    )
}