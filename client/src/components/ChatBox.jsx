import { useState } from "react";
import { Input, Button, List, Typography, Card } from "antd";
import { UserOutlined, RobotOutlined, SendOutlined } from "@ant-design/icons";
import { sendMessageToAI } from "../api/openai";
import { notifyError } from  "../utlis/notify.js";
import "./ChatBox.css";

const { Text } = Typography;

const ChatBox = () => {
  const [userInput, setUserInput] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!userInput.trim()) return;
    const userMsg = { sender: "user", text: userInput };
    setChatLog((prev) => [...prev, userMsg]);
    setUserInput("");
    setLoading(true);

    try {
      const res = await sendMessageToAI(userInput);
      console.log("AI Response:", res);

      const aiMsg = { sender: "ai", text: res.data.reply };
      setChatLog((prev) => [...prev, aiMsg]);
    } catch (err) {
      notifyError("AI Error", "Failed to connect to backend.");
    }

    setLoading(false);
  };

  return (
    <Card
      title="🧠 English Practice with AI"
      className="chat-container"
    >
      <List
        dataSource={chatLog}
        renderItem={(msg) => (
          <List.Item className="message-item">
            <List.Item.Meta
              avatar={
                msg.sender === "user" ? (
                  <UserOutlined className="user-avatar" />
                ) : (
                  <RobotOutlined className="ai-avatar" />
                )
              }
              title={msg.sender === "user" ? "You" : "AI"}
              description={
                <>
                  {msg.text.split("\n").map((line, index) => (
                    <Text key={index} className="message-text">
                      {line}
                    </Text>
                  ))}
                </>
              }
            />
          </List.Item>
        )}
        className="chat-messages"
      />
      <div className="input-container">
        <Input
          className="message-input"
          placeholder="Type your sentence..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <Button
          type="primary"
          icon={<SendOutlined />}
          loading={loading}
          onClick={handleSend}
          className="send-button"
        >
          Send
        </Button>
      </div>
    </Card>
  );
};

export default ChatBox;
