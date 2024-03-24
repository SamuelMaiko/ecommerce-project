import React from 'react';

const ChatBubble = ({ message, isUser }) => {
  // Determine the alignment of the chat bubble based on whether it's from the user or the bot
  const alignment = isUser ? 'justify-end' : 'justify-start';
  // Determine the color of the chat bubble based on whether it's from the user or the bot
  const bgColor = isUser ? 'bg-blue-500' : 'bg-gray-300';
  // Determine the text color of the chat bubble based on whether it's from the user or the bot
  const textColor = isUser ? 'text-white' : 'text-gray-800';
  // Determine the arrow direction based on whether it's from the user or the bot
  const arrowDirection = isUser ? 'right-0' : 'left-0';
  // Determine the arrow color based on whether it's from the user or the bot
  const arrowColor = isUser ? 'border-blue-500' : 'border-gray-300';

  return (
    <div className={`relative flex ${alignment} mb-2`}>
      {/* Chat bubble */}
      <div
        className={`max-w-xs mx-2 py-2 px-4 rounded-lg shadow-md ${bgColor} ${textColor}`}
      >
        <p className="text-sm font-body">{message}</p>
      </div>
      {/* Arrow extension */}
      <div className={`absolute ${arrowDirection} bottom-0 -mb-2`}>
        <div
          className={`border-solid border-4 border-transparent`}
          style={{ borderTopColor: 'transparent', borderBottomColor: arrowColor, borderRightColor: 'transparent', borderLeftColor: 'transparent' }}
        ></div>
      </div>
    </div>
  );
};

export default ChatBubble;
