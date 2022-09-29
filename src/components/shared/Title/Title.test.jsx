import {render, screen} from '@testing-library/react';
import Title from './Title';


test('renders title', () => {
    render(<Title />);
    const titleElement = screen.getByRole("heading");
    expect(titleElement).toBeInTheDocument();
})

describe('title sizes', () => { 

      test("Hero size renders", async () => {
        render(<Title size="hero" />)
        const HeroTitle = screen.getByRole('heading')
        expect(HeroTitle).toHaveClass("hero-title")
      })

   test("Large size renders", async () => {
        render(<Title size="large" />)
        const LargeTitle = screen.getByRole('heading')
        expect(LargeTitle).toHaveClass("large-title")
      })    
 })

 describe('title positions', () => { 

      test("center position renders", async () => {
        render(<Title position="center"/>)
        const centerTitle = screen.getByRole('heading')
        expect(centerTitle).toHaveClass("text-center")
      })

   test("left position renders", async () => {
        render(<Title position="left" />)
        const titleLeft = screen.getByRole('heading')
        expect(titleLeft).toHaveClass("text-left")
      })    
 })