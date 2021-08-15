import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => (
  <header className="Navbar">
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Navbar
