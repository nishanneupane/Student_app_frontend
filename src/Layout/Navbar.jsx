import React from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css"

const Layout = () => {
  return (
    <div>
      <nav className="navbar bg-body-tertiary bg-secondary setColor container-fluid custom-navbar">
        <div className="container-fluid">
          <Link className="navbar-brand navbar-color-white" to={"/"}>WHITEHOUSE</Link>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search"/>
            <Link className="btn btn-outline-warning" type="submit" to="/">Search</Link>
          </form>
          <form className='flex flex-col shadow'>
            <Link className="btn btn-outline-light" to="/adduser" >Add Student</Link>
          </form>
        </div>
      </nav>
    </div>
  )
}

export default Layout