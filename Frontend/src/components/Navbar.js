import React from 'react'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid" >
    <a className="navbar-brand" href="#">JWT Authentication</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " style={{color:"white"}} aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="#">Link</a>
        </li>
        
        
      </ul>
      <div className="d-flex">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link " style={{color:"white"}}  href="/register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" style={{color:"white"}} href="/login">Login</a>
        </li>
        
        
      </ul>
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar