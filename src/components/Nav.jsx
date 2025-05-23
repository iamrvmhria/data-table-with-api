import React from 'react'
import { useNavigate, Link, NavLink } from 'react-router-dom'
import PostMethod from './PostMethod'

export default function Nav() {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link" to='/'> Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/get-method'>Get Method</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/post-method'>Post Method</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/put-method'>Put Method</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/patch-method'>Patch Method</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to='/delete-method'>Delete Method</NavLink>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
