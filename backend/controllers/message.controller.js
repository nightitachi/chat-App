import Conversations from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import user from "../models/user.model.js";


//send message controller
export const sendMessage= async(req,res)=>{
  try {
    const {message} = req.body;
    const {id: receiverId} = req.params;
    const senderId = req.User._id;
    
    let conversation = await Conversations.findOne({
      participents:{
        $all:[senderId , receiverId]
      },
    })

    if(!conversation){
      conversation = await Conversations.create({
        participents:[senderId , receiverId],
      })
    }
    const newMessage = await new Message({
      senderId,
      receiverId,
      message
    })
    if(!newMessage){
      conversation.messages.push(newMessage._id)
    }
    
    //this will run in parallel to win more time ! 
    await Promise.all([conversation.save(),newMessage.save() ])
    res.status(201).json(newMessage)
  } catch (error) {
    console.error('Error in sending your message', error.message);
    res.status(500).json({error:'Internal server error'})
  }
  
}


// get message controller

export const getMessage= async(req , res)=>{
  try {
    const {id:userTochatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversations.findOne({
      participents:{$all :[senderId , userTochatId]},
    }).populate("messages")

    if(!conversation) return res.status(200).json([]);

    
    res.status(200).json(conversation.messages)
  } catch (error) {
    console.log("error message : " , error.message);
    res.status(500).json({error: "internal server error"})
    
  }
}