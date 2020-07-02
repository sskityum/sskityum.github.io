import React from 'react'

export const GridCol = ({children, style}) => {
    return (
        <div className={`col-${style}`}>
            {children}
        </div>
    )
}