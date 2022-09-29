import { render, screen } from '@testing-library/react';
import Card from './Card'

test('Card - img', () => {
    render(<Card />)
    expect(screen.getByRole('img')).toBeInTheDocument()
})


test('Card - title', () => {
    render(<Card />)
    expect(screen.getByRole('heading')).toBeInTheDocument()
})

describe('Card - Button', () => {

    test('if there is no onClick props', () => {
        render(<Card />)
        const Button = screen.queryByRole('button')
        expect(Button).not.toBeInTheDocument()
    })


    test('if there is an onClick props', () => {
        render(<Card onClick={() => alert("hello")} />)
        const Button = screen.getByRole('button') // ***
        expect(Button).toBeInTheDocument()
    })
})


describe('Card - Badges', () => {

    test('conditionally -false renders badge', () => {
        render(<Card />)
        const BadgeOne = screen.queryByTestId('listeners')
        const BadgeTwo = screen.queryByTestId('playcount')
        expect(BadgeOne).not.toBeInTheDocument()
        expect(BadgeTwo).not.toBeInTheDocument()
    })
})


