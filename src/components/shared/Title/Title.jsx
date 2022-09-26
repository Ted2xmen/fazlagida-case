import React from 'react'

const Title = ({ children, size }) => {

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

    return (
        <h1 className={`${sizes}`}>{children}</h1>
    )
}

export default Title