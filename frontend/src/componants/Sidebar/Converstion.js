import React from "react";
import Conversations from "./Conversations";
import useConversation from "../../zustand/useConversation";
const Conversation = ({Conversation , lastIdx , emoji}) => {

  const {selectedConversation , setSelectedConversation} = useConversation();
  const  selected = selectedConversation?._id === Conversation._id;
  return (
    <>
      <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className="w-12 rounded-full">
            <img src={Conversation.porfilePic} alt="Avatar" />
          </div>
        </div>
        <p className="font-bold text-gray-200">{Conversation.fullName}</p>
        <span className="text-xl">{emoji}</span>
      </div>
      {!lastIdx && <div className='divider my-0 py-0 h-1'/>}
    </>
  );
};

export default Conversation;
