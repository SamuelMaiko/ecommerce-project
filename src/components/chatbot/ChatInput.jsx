import React, { useState } from 'react';

const ChatInput = ({ ontestChat, onsetTestChat }) => {
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (message!== '') {
      const testMessage={
        message:message
      }
      const updatedTestChat=ontestChat.concat(testMessage)
      console.log(updatedTestChat)
      setMessage('');
      onsetTestChat(updatedTestChat);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="absolute bottom-0 w-full flex justify-between items-center mt-4 ">
      <input
        type="text"
        value={message}
        onChange={handleChange}
        placeholder="Type your message..."
        className="w-full px-4 py-3 rounded-lg border border-gray-500 focus:outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        className="ml-2 px-3 py-3 rounded-full font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.3} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18" />
        </svg>

      </button>
    </form>
  );
};

export default ChatInput;
