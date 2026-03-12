import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Plans from "../components/Plans";
import MyProjects from "../components/MyProjects";
import Screen from "../components/Screen";
import Chatbar from "../components/Chatbar";
import useStore from "../zustand/store";

function Dashboard() {
  const { showPlans, setShowPlans } = useStore();

  const [showProjects, setShowProjects] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);
  const [messages, setMessages] = useState([]);

  const togglePlans = () => {
    setShowPlans(!showPlans);
    setShowProjects(false);
  };

  const toggleProjects = () => {
    setShowProjects(!showProjects);
    setShowPlans(false);
  };

  const sendMessage = (text) => {
    if (!chatStarted) {
      setChatStarted(true);
    }

    const newMessages = [...messages, { role: "user", text }];
    setMessages(newMessages);

    setTimeout(() => {
      const botResponse = { role: "bot", text: "This is a response!" };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen">

      <Navbar togglePlans={togglePlans} toggleProjects={toggleProjects} />

      {showPlans && <Plans />}
      {showProjects && <MyProjects />}

      {!showPlans && !showProjects && (
        <div className="flex flex-1">

          {/* LEFT SIDEBAR */}
          {chatStarted && (
            <div className="w-80 border-r bg-white flex flex-col shadow-md">
              <div className="flex-1 overflow-y-auto p-4 space-y-3">
                <h3 className="text-lg font-semibold mb-3">
                  Conversation
                </h3>

                {messages.map((msg, index) => (
                  <div
                    key={index}
                    className={`p-2 rounded ${
                      msg.role === "user"
                        ? "bg-blue-100 text-blue-900"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {msg.text}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* RIGHT CHAT SCREEN */}
          <div className="flex flex-col flex-1 bg-gray-50">

            <Screen messages={messages} chatStarted={chatStarted} />

            {/* Chatbar bottom */}
            {chatStarted && (
              <Chatbar sendMessage={sendMessage} />
            )}

            {!chatStarted && (
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 w-full max-w-3xl px-4">
                <Chatbar sendMessage={sendMessage} />
              </div>
            )}

          </div>

        </div>
      )}

    </div>
  );
}

export default Dashboard;