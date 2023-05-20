import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <div>
        <h1>Sorry, page not found</h1>
        <Link to="/" >Return to home</Link>
      </div>
  )
}

export default NotFound