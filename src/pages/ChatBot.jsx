import React from "react";
import { styled } from "styled-components";
import chatbot from "../assets/chatbot.avif";
import chatbot2 from "../assets/chatbot2.avif";
import ChatBubble from "../components/chatbot/ChatBubble";
import { useNavigate } from "react-router-dom";

const ChatBot = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-white">
      <div className="pt-[4rem] md:pt-7 w-[95%] p-3 mx-auto h-full bg-white flex flex-col md:flex-row md:justify-between">
        <div className="">
          <div className="md:w-[28rem]">
            <h1 className="uppercase font-heading font-bold text-4xl">
              Chatbot
            </h1>
            <p className="mt-2 text-body text-gray-400">
              Get instant assistance and answers to your questions from our
              friendly AI-powered chatbot. Whether you need product
              recommendations, help with orders, or have general inquiries, our
              chatbot is here to help you 24/7.
            </p>
          </div>
          <SectionTwo className="hidden md:block mt-14 w-[25rem] h-[16rem]"></SectionTwo>
        </div>
        <div className="relative flex flex-col">
          <Section className="w-[20rem] absolute md:static -right-14 md:w-[28rem] h-[20rem]">
            {/* <img src={chatbot} alt="" /> */}
          </Section>
          <div className="absolute top-20 md:-left-32 -left-6">
            <ChatBubble message="Have a question? Let's chat!" isUser={false} />
          </div>
          <div className="absolute top-32 md:top-36 -left-6 md:-left-56 w-[13rem]">
            <ChatBubble
              message="Click 'Chat with Boti' below and get instant assistance"
              isUser={false}
            />
          </div>
          <button
            onClick={() => navigate("/chat")}
            className="mt-[24rem] md:mt-32 shadow-[2px_2px_10px_rgba(0,0,0,0.15)] bg-[#f44336] hover:bg-[#d32f2f] transition-colors duration-300 text-white font-button border-none rounded-3xl px-[50px] py-[10px] text-[16px] md:text-[20px]"
          >
            Chat with Boti
          </button>
        </div>
      </div>
    </div>
  );
};

const Section = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${chatbot2});
  background-size: 100% 100%;
  // background-color:red;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
`;
const SectionTwo = styled.section`
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0)),
    url(${chatbot});
  background-size: 100% 100%;
  // background-color:red;
  background-repeat: no-repeat;
  background-position: center center;
  background-attachment: scroll;
`;

export default ChatBot;
