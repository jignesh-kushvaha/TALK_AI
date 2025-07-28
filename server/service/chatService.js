import { openai } from "../utils/openaiConfig.js";

export const chatWithAI = async (req, res) => {
  try {
    const userMessage = req.body.message;

    const messages = [
      {
        role: "system",
        content: `
            You are a friendly English tutor.
            Your task is to help users improve their English sentences by correcting them and providing explanations.
            When correcting the user's sentence:
            - Start with ✅ Corrected Sentence: "..."
            - Then give 📌 Explanation: in bullet points (use - for each point)
            - Keep the explanation short, simple, and beginner-friendly
            - DO NOT write a big paragraph
            - Make it encouraging and conversational
        `,
      },
      {
        role: "user",
        content: userMessage,
      },
    ];

    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: messages,
    });

    const aiReply = response.choices[0].message.content;
    res.json({ reply: aiReply });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Something went wrong" });
  }
};
