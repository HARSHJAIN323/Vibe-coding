import React from "react";

function Screen({ messages, chatStarted }) {

  const lastBotMessage =
    messages.slice().reverse().find((msg) => msg.role === "bot");

  return (
    <div className="flex-1 bg-gray-100 flex items-center justify-center p-10">

      {!chatStarted ? (
        <div className="text-gray-400 text-lg">
          Ask anything to start the conversation
        </div>
      ) : (

        <div className="w-full max-w-5xl h-[75vh] bg-white rounded-2xl shadow-lg border overflow-hidden">

          {/* Preview header */}
          <div className="flex items-center gap-2 px-4 py-2 border-b bg-gray-50">
            <div className="w-3 h-3 bg-red-400 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="w-3 h-3 bg-green-400 rounded-full"></div>

            <span className="ml-3 text-sm text-gray-500">
              Preview
            </span>
          </div>

          <div className="flex items-center justify-center h-full">

            {!lastBotMessage ? (

              /* Loading animation */

              <div className="flex flex-col items-center gap-4">

                <div className="text-xl font-semibold text-gray-600 animate-pulse">
                  ⚡ Vibe Coding...
                </div>

                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-150"></div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-300"></div>
                </div>

              </div>

            ) : (

              /* Preview placeholder */

              <div className="text-gray-400 text-lg">
                Preview generated successfully
              </div>

            )}

          </div>

        </div>

      )}

    </div>
  );
}

export default Screen;