import { Link } from 'react-router-dom'
import Title from './shared/Title/Title'
import ThemeSwitcher from './ThemeSwitcher'

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  // { name: 'Details', path: '/details' }
]

const Navbar = () => {
  return (
    <div className="flex flex-wrap justify-between items-center space-x-4 mx-10 py-10">
      <Title size="medium"><Link to="/">Home</Link></Title>
      <ThemeSwitcher />
      <div className="space-x-6 font-bold">
        {navLinks.map((item) => {
          return (
            <Link key={item.path} to={item.path}>{item.name}</Link>
          );
        })}
      </div>
    </div>
  )
}

export default Navbar