import React, { useState, useRef } from "react";
import { FiPaperclip } from "react-icons/fi";
import { FaMicrophone } from "react-icons/fa";
import { IoSend } from "react-icons/io5";

function Chatbar({ sendMessage }) {

  const [message, setMessage] = useState("");
  const fileInputRef = useRef(null);

  const handleSend = () => {
    if (message.trim() === "") return;
    sendMessage(message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const startListening = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported in this browser");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";

    recognition.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      setMessage((prev) => prev + " " + transcript);
    };

    recognition.start();
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Uploaded File:", file.name);
    }
  };

  return (
    <div className="w-full flex justify-center py-6 px-4">

      {/* Floating Chat Container */}
      <div className="w-full max-w-3xl flex items-center gap-3 px-5 py-3 bg-white border border-gray-200 rounded-3xl shadow-lg">

        {/* Upload */}
        <button
          onClick={() => fileInputRef.current.click()}
          className="text-gray-500 hover:text-black text-xl transition"
        >
          <FiPaperclip />
        </button>

        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileUpload}
          className="hidden"
        />

        {/* Input */}
        <textarea
          rows="1"
          value={message}
          placeholder="Ask anything..."
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 outline-none bg-transparent text-gray-700 placeholder-gray-400 resize-none overflow-hidden text-base"
        />

        {/* Mic */}
        <button
          onClick={startListening}
          className="text-gray-500 hover:text-black text-lg transition"
        >
          <FaMicrophone />
        </button>

        {/* Send */}
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white w-10 h-10 rounded-xl hover:bg-blue-700 transition flex items-center justify-center"
        >
          <IoSend />
        </button>

      </div>

    </div>
  );
}

export default Chatbar;