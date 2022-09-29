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
            break;
    }

    let positions
    switch (position) {
        case 'center':
            positions = "text-center"
            break;
        case 'left':
            positions = "text-left"
            break;
        case 'right':
            positions = "text-right"
            break;
        default:
            break;
    }

    return (
        <h1 className={`${sizes} m-5 ${positions}`}>{children}</h1>
    )
}

export default Title