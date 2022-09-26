import React from 'react'

const Title = ({ children, size, position }) => {

    let sizes
    switch (size) {
        case 'hero':
            sizes = "hero-title"
            break;
        case 'large':
            sizes = "large-title"
            break;
        case 'medium':
            sizes = "medium-title"
            break
        default:
            return <h1 className="default-title"> {children} </h1>
    }

    let positions
    switch (position) {
        case 'center':
            position = "text-center"
            break;
        case 'left':
            position = "text-left"
            break;
        case 'right':
            position = "text-right"
            break;
        default:
            break;
    }

    return (
        <h1 className={`${sizes} m-5 ${position}`}>{children}</h1>
    )
}

export default Title