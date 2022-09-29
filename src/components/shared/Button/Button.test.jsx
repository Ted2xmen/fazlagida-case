import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Button from './Button'


describe('Base button', () => { // describe.only - fit  or  describe.skip - xit

  test("label loading correctly",
    async () => {
      render(<Button label="Loading" />)
      const buttonElement = screen.getByText('Loading')
      expect(buttonElement).toBeInTheDocument()
    })

  describe('Button - Classes', () => { 

    test("shadow prop loading correctly", async () => {
      render(<Button shadow label="Loading" />)
      const shadowButton = screen.getByTestId('button')
      const shadowHoverButton = screen.getByTestId('button')
      expect(shadowButton).toHaveClass("shadow-lg")
      expect(shadowHoverButton).toHaveClass("hover:shadow-none")
    })



    describe('Button - Types', () => {

      test("primary loading correctly", async () => {
        render(<Button type="primary" label="Loading" />)
        const primaryButton = screen.getByTestId('button')
        expect(primaryButton).toHaveClass("btn-primary")
      })

      test("secondary loading correctly", async () => {
        render(<Button type="secondary" label="Loading" />)
        const secondaryButton = screen.getByTestId('button')
        expect(secondaryButton).toHaveClass("btn-secondary")
      })
    })
  })
})