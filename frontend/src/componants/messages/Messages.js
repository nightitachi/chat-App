import React from 'react'
import Message from './Message'
import useGetMessages from "../../Hooks/useGetMessages.js"
import MessageSkeleton from '../skeletons/MessageSkeleton.js'

const Messages = () => {
  const {messages , loading } = useGetMessages();
  console.log("messages : ", messages);
  
  return (
    <div className='px-4 flex-1 overflow-auto'>
			
		</div>
  )
}

export default Messages
