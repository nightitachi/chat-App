import React from 'react'
import SearchInput from './SearchInput.js'
import Conversations from './Conversations.js'
import LogoutButton from './LogoutButton.js'

const Sidebar = () => {
  return (
    <div>
      <SearchInput/>
      <div className='devider px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
