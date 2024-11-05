import { create } from "zustand";

const useConversation = create((set)=>({
  selectedCnversation:null, 
  setSelectedConversation:(selectedCnversation)=> set({selectedCnversation}),
  messages:[],
  setmessages:(messages)=> set({messages})

}))

export default useConversation;