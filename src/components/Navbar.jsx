import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex justify-between space-x-4 mx-10 py-10">
      <h3 className="font-bold text-teal-900">LastFM</h3>
      <div className="space-x-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </div>
    </div>
  )
}

export default Navbar