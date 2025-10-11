import React from 'react'
import { Link } from 'react-router'

const HomeMenu = () => {
  return (
    <div className='flex justify-between border-gray-800 border-l-12 border-r-12 bg-gray-900 p-2 pb-0'>
      <Link to='/menu'>
       <p>Menu</p>
      </Link>
      <Link to='/settings'>
       <p>Settings</p>
      </Link>
    </div>
  )
}

export default HomeMenu