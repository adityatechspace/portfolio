import { useState, useRef, useEffect, } from "react";

import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import SuggestedQuestions from "./SuggestedQuestions";
import { askAssistant } from "../../services/api";

function ChatBot() {
  const [messages, setMessages] = useState([
    {
      sender: "assistant",
      message:
        "Hi! I'm Aditya's AI assistant. Ask me about projects, skills, experience or certifications.",
    },
  ]);

  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef(null);

  const handleSend = async () => {

  if (!input.trim()) return;

  const userMessage = input;

  setMessages((prev) => [
    ...prev,
    {
      sender: "user",
      message: userMessage,
    },
  ]);

  setInput("");

  try {
    setLoading(true);
    const data =
      await askAssistant(
        userMessage
      );

    setMessages((prev) => [
      ...prev,
      {
        sender: "assistant",
        message:
          data.response,
      },
    ]);

  } catch {

    setMessages((prev) => [
      ...prev,
      {
        sender: "assistant",
        message:
          "Unable to connect to AI Assistant.",
      },
    ]);
  } finally {
    setLoading(false);
  }
 };

  const handleSuggestedQuestion = (
    question
  ) => {
    setInput(question);
  };

  useEffect(() => {
  if (chatContainerRef.current) {
    chatContainerRef.current.scrollTop =
      chatContainerRef.current.scrollHeight;
  }
}, [messages, loading]);

  return (
    <section
      id="ai-assistant"
      className="py-32"
    >
      <div className="max-w-5xl mx-auto px-6">

{/* Heading */}

 <div className="relative mb-20">

    <div className="
    absolute
    -left-20
    top-0
    h-56
    w-56
    rounded-full
    bg-blue-500/10
    blur-[110px]
    "></div>

    <div className="relative">

        <div className="inline-flex items-center gap-3">

            <div className="h-px w-12 bg-gradient-to-r from-blue-500 to-transparent"></div>

            <span className="
            uppercase
            tracking-[0.35em]
            text-xs
            font-semibold
            text-blue-400/80
            ">
                        FLAGSHIP FEATURE
            </span>

        </div>

        <h2 className="
        mt-5
        text-4xl
        md:text-5xl
        font-extrabold
        leading-tight

        bg-gradient-to-r
        from-white
        via-slate-100
        to-slate-400

        bg-clip-text
        text-transparent
        ">
                         AI Portfolio Assistant


        </h2>

        <p className="
        mt-6
        max-w-xl
        text-lg
        leading-8
        text-slate-400
        ">
            Ask questions about my
            projects, skills, experience,
            certifications and education.
        </p>

        <div className="
        mt-8
        h-1
        w-28
        rounded-full
        bg-gradient-to-r
        from-blue-500
        via-purple-500
        to-cyan-500
        "/>

    </div>

</div>

        <div className="border border-slate-800 rounded-3xl p-6">
          
          <div className=" chat-scroll space-y-4 h-[400px] overflow-y-auto mb-6" ref={chatContainerRef}>
            {messages.map((msg, index) => (
              <MessageBubble
                key={index}
                sender={msg.sender}
                message={msg.message}
              />
              
            ))}

            {loading && (
  <div className="flex justify-start">
    <div className="max-w-[80%] px-5 py-3 rounded-2xl bg-slate-800 text-slate-400">
      <span className="typing">
        Typing
      </span>
    </div>
  </div>
)}
          </div>

          <div>

          <ChatInput
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onSend={handleSend}
          />
          </div>

          <div className="mb-6 mt-5">
            <SuggestedQuestions
              onQuestionClick={
                handleSuggestedQuestion
              }
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default ChatBot;