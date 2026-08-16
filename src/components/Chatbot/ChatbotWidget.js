import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { FiMessageSquare, FiX, FiSend, FiUser, FiZap, FiHelpCircle, FiSearch, FiCpu } from 'react-icons/fi';
import { useIWheels } from '../../context/IWheelsContext';
import { FAQ_KNOWLEDGE } from '../../data/iwheelsData';

const WidgetTrigger = styled.button`
  position: fixed;
  bottom: 25px;
  right: 25px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
  border: none;
  color: #0F1624;
  font-size: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 10px 25px rgba(0, 242, 254, 0.5);
  z-index: 999;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 15px 35px rgba(0, 242, 254, 0.7);
  }
`;

const PulseBadge = styled.span`
  position: absolute;
  top: -2px;
  right: -2px;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: #38EF7D;
  border: 3px solid #0F1624;
`;

const ChatWindow = styled.div`
  position: fixed;
  bottom: 95px;
  right: 25px;
  width: 380px;
  height: 520px;
  background: #0F1624;
  border: 1px solid rgba(0, 242, 254, 0.3);
  border-radius: 20px;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  z-index: 999;
  overflow: hidden;

  @media (max-width: 480px) {
    width: calc(100vw - 30px);
    right: 15px;
    bottom: 80px;
    height: 480px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, rgba(0, 242, 254, 0.15) 0%, rgba(15, 22, 36, 0.95) 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .bot-info {
    display: flex;
    align-items: center;
    gap: 10px;

    .icon {
      width: 36px;
      height: 36px;
      border-radius: 10px;
      background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
      display: flex;
      align-items: center;
      justify-content: center;
      color: #0F1624;
      font-weight: bold;
    }

    h4 {
      margin: 0;
      color: #FFF;
      font-size: 1rem;
    }

    span {
      font-size: 0.7rem;
      color: #38EF7D;
      display: flex;
      align-items: center;
      gap: 4px;
    }
  }
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #A0AEC0;
  cursor: pointer;
  padding: 4px;

  &:hover {
    color: #FFF;
  }
`;

const MessagesBody = styled.div`
  flex: 1;
  padding: 1rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const MessageBubble = styled.div`
  display: flex;
  gap: 8px;
  align-items: flex-start;
  max-width: 85%;
  align-self: ${(props) => (props.isUser ? 'flex-end' : 'flex-start')};
  flex-direction: ${(props) => (props.isUser ? 'row-reverse' : 'row')};

  .avatar {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: ${(props) => (props.isUser ? 'rgba(255,255,255,0.1)' : 'rgba(0, 242, 254, 0.2)')};
    color: ${(props) => (props.isUser ? '#FFF' : '#00F2FE')};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    flex-shrink: 0;
  }

  .text {
    background: ${(props) => (props.isUser ? 'linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%)' : 'rgba(255, 255, 255, 0.05)')};
    color: ${(props) => (props.isUser ? '#0F1624' : '#E2E8F0')};
    border: 1px solid ${(props) => (props.isUser ? 'transparent' : 'rgba(255, 255, 255, 0.1)')};
    padding: 0.75rem 1rem;
    border-radius: 16px;
    font-size: 0.88rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }
`;

const ChipsContainer = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
  padding: 0 1rem 0.8rem;
`;

const ChipBtn = styled.button`
  background: rgba(0, 242, 254, 0.1);
  border: 1px solid rgba(0, 242, 254, 0.3);
  color: #00F2FE;
  padding: 5px 10px;
  border-radius: 12px;
  font-size: 0.75rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #00F2FE;
    color: #0F1624;
  }
`;

const InputBar = styled.form`
  display: flex;
  padding: 0.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(15, 22, 36, 0.95);
  gap: 8px;

  input {
    flex: 1;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 0.6rem 1rem;
    border-radius: 12px;
    color: #FFF;
    font-size: 0.88rem;
    outline: none;

    &:focus {
      border-color: #00F2FE;
    }
  }

  button {
    background: linear-gradient(135deg, #00F2FE 0%, #4FACFE 100%);
    color: #0F1624;
    border: none;
    padding: 0.6rem 1rem;
    border-radius: 12px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export const ChatbotWidget = () => {
  const { isChatbotOpen, setIsChatbotOpen, orders, addChatLog } = useIWheels();

  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "⚡ Hello! I am i-Bot, your i-Wheels AI assistant. How can I help you today?"
    }
  ]);
  const [inputText, setInputText] = useState('');

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isChatbotOpen]);

  const handleSend = (userQuery) => {
    const textToSend = userQuery || inputText;
    if (!textToSend.trim()) return;

    const newMsgs = [...messages, { sender: 'user', text: textToSend }];
    setMessages(newMsgs);
    if (!userQuery) setInputText('');

    // Process Bot Response
    setTimeout(() => {
      const botResponse = generateBotReply(textToSend);
      setMessages([...newMsgs, { sender: 'bot', text: botResponse }]);
      addChatLog(textToSend);
    }, 500);
  };

  const generateBotReply = (query) => {
    const q = query.toLowerCase();

    // Check Order Status query
    if (q.includes('ord-') || q.includes('order')) {
      const matchOrder = orders.find((o) => q.includes(o.id.toLowerCase()));
      if (matchOrder) {
        return `📦 Order ${matchOrder.id} Found!\n• Customer: ${matchOrder.customerName}\n• Status: ${matchOrder.status}\n• Total: $${matchOrder.total}\n• Summary: ${matchOrder.summary}`;
      } else if (q.includes('order')) {
        return `To check order status, please type your Order ID (e.g., ORD-8921). Sample IDs: ${orders.map(o => o.id).join(', ')}`;
      }
    }

    // Check Product recommendation query
    if (q.includes('choose') || q.includes('recommend') || q.includes('beginner')) {
      return `🚲 Looking for recommendations?\n• For Urban Commutes: i-Glide Urban or i-Solo Lite (40-65km range)\n• For Maximum Speed & Range: i-Wheel Apex Pro or i-Monster All-Terrain\n• For Custom Builds: Try our Customizer to select 4000W motors & 72V battery packs!`;
    }

    // Check Knowledge Base
    for (const faq of FAQ_KNOWLEDGE) {
      if (faq.keywords.some((k) => q.includes(k))) {
        return `💡 ${faq.question}\n\n${faq.answer}`;
      }
    }

    return `I am here to help! You can ask me about:\n• Range & battery specs\n• Product customization\n• Delivery & warranty details\n• Order tracking (type your Order ID, e.g. ORD-8921)`;
  };

  return (
    <>
      <WidgetTrigger onClick={() => setIsChatbotOpen(!isChatbotOpen)}>
        <FiMessageSquare />
        <PulseBadge />
      </WidgetTrigger>

      {isChatbotOpen && (
        <ChatWindow>
          <ChatHeader>
            <div className="bot-info">
              <div className="icon">iB</div>
              <div>
                <h4>i-Bot Assistant</h4>
                <span>● Active & Online</span>
              </div>
            </div>
            <CloseBtn onClick={() => setIsChatbotOpen(false)}>
              <FiX size={18} />
            </CloseBtn>
          </ChatHeader>

          <MessagesBody>
            {messages.map((msg, idx) => (
              <MessageBubble key={idx} isUser={msg.sender === 'user'}>
                <div className="avatar">
                  {msg.sender === 'user' ? <FiUser /> : <FiCpu />}
                </div>
                <div className="text">{msg.text}</div>
              </MessageBubble>
            ))}
            <div ref={messagesEndRef} />
          </MessagesBody>

          <ChipsContainer>
            <ChipBtn onClick={() => handleSend("Help me choose a wheel")}>
              🎯 Recommendations
            </ChipBtn>
            <ChipBtn onClick={() => handleSend("How far can an i-Wheel travel?")}>
              🔋 Battery & Range
            </ChipBtn>
            <ChipBtn onClick={() => handleSend("Where can I track order ORD-8921?")}>
              📦 Order Tracking
            </ChipBtn>
          </ChipsContainer>

          <InputBar onSubmit={(e) => { e.preventDefault(); handleSend(); }}>
            <input
              type="text"
              placeholder="Ask i-Bot anything..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
            />
            <button type="submit">
              <FiSend size={16} />
            </button>
          </InputBar>
        </ChatWindow>
      )}
    </>
  );
};

export default ChatbotWidget;
