import { useState } from "react";
import { Input, Button, List, Typography, Card } from "antd";
import { UserOutlined, RobotOutlined, SendOutlined } from "@ant-design/icons";
import { sendMessageToAI } from "../api/openai";
import { notifyError } from  "../utlis/notify.js";

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
      style={{ maxWidth: 700, margin: "2rem auto", borderRadius: "16px" }}
    >
      <List
        dataSource={chatLog}
        renderItem={(msg) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                msg.sender === "user" ? (
                  <UserOutlined style={{ fontSize: 20 }} />
                ) : (
                  <RobotOutlined style={{ fontSize: 20, color: "#52c41a" }} />
                )
              }
              title={msg.sender === "user" ? "You" : "AI"}
              description={<Text>{msg.text}</Text>}
            />
          </List.Item>
        )}
        style={{ maxHeight: 400, overflowY: "auto", marginBottom: "1rem" }}
      />
      <Input.Group compact>
        <Input
          style={{ width: "85%" }}
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
        >
          Send
        </Button>
      </Input.Group>
    </Card>
  );
};

export default ChatBox;
