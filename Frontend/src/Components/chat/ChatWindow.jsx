
import { useState } from "react";
import { ArrowLeft, MoreHorizontal } from "lucide-react";
import ChatMessage from "./ChatMessage";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";

const initialMessages = [
  {
    id: 1,
    role: "assistant",
    content:
      "Hey there! I'm your smart assistant. I'm here to make things easier for you. Whether you need quick answers, help with tasks, or just a friendly chat, I've got you covered! Just type in your request, and let's get started.",
  },
  {
    id: 2,
    role: "user",
    content: "Can you explain what artificial intelligence is?",
  },
  {
    id: 3,
    role: "assistant",
    content:
      "Artificial intelligence (AI) is a technology that enables machines to perform tasks that typically require human intelligence, such as learning, reasoning, understanding language, and solving problems.",
  },
];

export default function ChatWindow() {
  const [messages, setMessages] = useState(initialMessages);
  const [loading, setLoading] = useState(false);
  // post request to API model;
  
  // get request to API model;
  const sendMessage = (content) => {
    const newMessage = {
      id: Date.now(),
      role: "user",
      content,
    };
    setMessages((previous) => [...previous, newMessage]);
    // Temporary response for UI testing
    setLoading(true);

    setTimeout(() => {
      setMessages((previous) => [
        ...previous,
        {
          id: Date.now() + 1,
          role: "assistant",
          content:
            "This is a demo response. Later, we will connect this chat to the Laravel API and the selected AI provider.",
        },
      ]);
      setLoading(false);
    }, 1200);
  };

  return (
    <div className="h-full flex flex-col bg-gray-200/100">
      {/* Messages */}
      <div className="flex-1 min-h-0 overflow-y-auto px-1 py-2 md:px-5 md:py-5">

        <div className="max-w-2xl mx-auto space-y-2">
          {messages.map((message) => (
            <ChatMessage
              key={message.id}
              message={message}
            />
          ))}
          {loading && <TypingIndicator />}

        </div>
      </div>

      {/* Chat Input */}
      <div className="shrink-0 px-3 pb-3 pt-2 md:px-5 md:pb-4 ">

        <div className="max-w-3xl mx-auto">

          <ChatInput
            onSend={sendMessage}
            disabled={loading}
          />

          <p className="text-center text-[9px] text-gray-600 mt-2">
            Vortex AI can make mistakes. Check important information.
          </p>

        </div>
      </div>

    </div>
  );
}
