import React from 'react'
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
   <div className="d-flex align-items center justify-content-center">
     <Link to=".">
        <img src="https://media1.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif" alt="" />
    </Link>
   </div>
  )
}

export default NotFoundPage