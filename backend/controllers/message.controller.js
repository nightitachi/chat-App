import Conversations from "../models/conversation.model.js";
import Message from "../models/message.model.js";
import User from "../models/user.model.js";

export const sendMessage= async(req,res)=>{
  try {
    const {message} = req.body;
    const {id: receiverId} = req.params;
    const senderId = req.user._id;
    
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
    const newMessage = new Message({
      senderId,
      receiverId,
      message
    })
    if(!newMessage){
      conversation.messages.push(newMessage._id)
    }
    
    
    await Promise.all([conversation.save(),newMessage.save() ])
    res.status(201).json(newMessage)
  } catch (error) {
    console.error('Error in sending your message', error.message);
    res.status(500).json({error:'Internal server error'})
  }
  
}

export const getMessage = async (req, res) => {
  try {
    const { id: userToChatId } = req.params; // Extract userToChatId from URL
    const senderId = req.user._id; // Get the sender's ID from the authenticated user

    // Find the conversation where both sender and userToChatId are participants
    const conversation = await Conversations.findOne({
      participents: { $all: [senderId, userToChatId] },
    }).populate("messages"); // Populate the 'messages' field

    if (!conversation) {
      // If no conversation found, return an empty array or a message
      return res.status(200).json([]); 
    }

    // Extract and return the messages from the conversation
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.log("error message:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
