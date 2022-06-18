import React from 'react'

function Home() {
  const isLoggedIn = localStorage.getItem('token')
  return (
    
    <div>
      <h1>Home</h1>
      <h3>Welcome to the home page</h3>
      <p>This is page is protected</p>
    </div>
  )
}

export default Home