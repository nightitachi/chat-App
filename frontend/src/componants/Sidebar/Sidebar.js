import React from 'react'
import LogoutButton from './LogoutButton.js'
import Conversations from './Conversations.js'
import SearchInput from './SearchInput.js'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
      <SearchInput/>
      <div className='devider px-3'></div>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
