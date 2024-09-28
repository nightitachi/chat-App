import mongoose from "mongoose";

const conversationbSchema = new mongoose.Schema({
  participents:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref:'User',
    }
  ],
  messages:[{
    type: mongoose.Schema.Types.ObjectId,
      ref:'Message',
      default:[],
  }]
},{timestamps:true})

const Conversations = mongoose.model("Conversation" , conversationbSchema);
export default Conversations; 