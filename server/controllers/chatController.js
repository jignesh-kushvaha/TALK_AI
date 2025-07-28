import { chatWithAI } from '../service/chatService.js';

export const chatController = async (req, res) => {
  try {
    const response = await chatWithAI(req, res);
    res.json(response);
  } catch (error) {
    console.log('Chat Error', 'Failed to get response from AI; ', error);
    res.status(500).json({ error: 'Failed to get response from AI' });
  }
};
