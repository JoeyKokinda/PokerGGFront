import { useState } from 'react';

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState('');

  const handleInputChange = (event) => {
    setInputMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (inputMessage.trim() !== '') {
      const newMessage = {
        id: Date.now(),
        text: inputMessage,
        sender: 'user',
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-header">
        <h2>Chat</h2>
      </div>
      <div className="chat-messages">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`chat-message ${
              message.sender === 'user' ? 'user-message' : 'bot-message'
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          className="chat-input-field"
          placeholder="Type a message..."
          value={inputMessage}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="send-button" onClick={handleSendMessage}>
            <img src='../public/send-message.svg' alt="Send"></img>
        </button>
      </div>
    </div>
  );
}