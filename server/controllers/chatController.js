import { openai } from '../utils/openaiConfig.js';

export const chatWithAI = async (req, res) => {
  try {
    const userMessage = req.body.message;

    const messages = [
      {
        role: 'system',
        content: 'You are a friendly English tutor. Gently correct grammar and explain mistakes in simple terms.',
      },
      {
        role: 'user',
        content: userMessage,
      },
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4o-mini', 
      messages: messages,
    });

    const aiReply = response.choices[0].message.content;
    res.json({ reply: aiReply });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Something went wrong' });
  }
};
