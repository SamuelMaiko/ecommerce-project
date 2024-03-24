import React from 'react'
import { styled } from "styled-components";
import chatbot from "../assets/chatbot.avif";
import chatbot2 from "../assets/chatbot2.avif";
import ChatBubble from '../components/chatbot/ChatBubble';
import { useNavigate } from 'react-router-dom';

const ChatBot = () => {
    const navigate=useNavigate()
  return (
    <div className='w-full h-screen bg-white'>

        <div className='pt-7 w-[95%] mx-auto h-full bg-white flex justify-between'>
            <div className=''>

                <div className='w-[28rem]'>
                    <h1 className='uppercase font-heading font-bold text-4xl'>Chatbot</h1>
                    <p className='mt-2 text-body text-gray-400'>
                        Get instant assistance and answers to your questions from our friendly AI-powered chatbot.
                        Whether you need product recommendations, help with orders, or have general inquiries, our
                        chatbot is here to help you 24/7.
                    </p>
                </div>
                <SectionTwo className=' mt-14 w-[25rem] h-[16rem]'>

                </SectionTwo>
            </div>
            <div className='relative'>

                <Section className='w-[28rem] h-[20rem]'>
                    {/* <img src={chatbot} alt="" /> */}
                </Section>
                <div className='absolute top-20 -left-32'>
                    <ChatBubble message="Have a question? Let's chat!" isUser={false} />
                </div>
                <div className='absolute top-36 -left-56'>
                    <ChatBubble message="Click 'Chat with Boti' below and get instant assistance" isUser={false} />
                </div>
                <button 
                onClick={()=>navigate('/chat')}
                className='mt-10 shadow-[2px_2px_10px_rgba(0,0,0,0.1)] bg-[#ffa500] hover:bg-[#ff6c00] transition-colors duration-300 text-white font-button border-none rounded-3xl px-[30px] py-[10px] text-[20px]'
                >
                    Chat with Boti
                </button>
            </div>


        </div>
    </div>

  )
}

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

export default ChatBot