import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Badge from './Badge'


    test("Badge type -playcount loading correctly", async () => {
      render(<Badge type="playcount">Children</Badge>)
      const BadgeChildren = screen.getByTestId('badge')
      expect(BadgeChildren).toHaveClass("badge-playcount")
    })

