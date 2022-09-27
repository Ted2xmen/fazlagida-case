import { Link } from 'react-router-dom'
import Title from './shared/Title/Title'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Details', path: '/details' }

]

const Navbar = () => {
  return (
    <div className="flex justify-between items-center space-x-4 mx-10 py-10">
      <Title size="medium">fg.fm</Title>
      <div className="space-x-6 font-bold">
        {navLinks.map((item) => {
          return (
            <Link key={item.path} to={item.path}>{item.name}</Link>
          );
        })}
        <a href="https://fazlagida-case-jz8l.vercel.app/" target="_blank" rel="noreferrer">Storybook</a>
      </div>
    </div>
  )
}

export default Navbar