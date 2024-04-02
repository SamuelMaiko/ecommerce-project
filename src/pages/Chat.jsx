import React, { useEffect, useState } from "react";
import ChatInput from "../components/chatbot/ChatInput";
import ChatBubble from "../components/chatbot/ChatBubble";

const Chat = () => {
  const [testChat, setTestChat] = useState([]);
  useEffect(() => {}, [testChat]);

  return (
    <div className="w-full h-screen pb-[6.3rem]">
      <div className="relative w-[88%] md:w-[45%] mx-auto h-full">
        <h1 className="text-xl md:text-2xl py-2 bg-[#f5f5f5] font-heading font-semibold text-center capitalize">
          Chat with Boti
        </h1>
        <ChatBubble message="Hi there!" isUser={true} />
        <ChatBubble
          message="Hi can I assist with raw materials today!"
          isUser={false}
        />
        <ChatBubble
          message="I'm looking for information on sustainable extraction methods."
          isUser={true}
        />
        <ChatBubble
          message="Sure thing! Let me gather some details for you."
          isUser={false}
        />
        {/* <ChatBubble message="Hi there!" isUser={true} /> */}
        <ChatBubble
          message="Here are some sustainable extraction methods."
          isUser={false}
        />
        <ChatInput ontestChat={testChat} onsetTestChat={setTestChat} />
        {testChat &&
          testChat.map((chat, index) => {
            return (
              <ChatBubble key={index} message={chat.message} isUser={true} />
            );
          })}
      </div>
    </div>
  );
};

export default Chat;
