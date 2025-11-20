import React, { useState } from "react";
import Chats from "./Chats";
import Summary from "./Summary";

const ChatBox = () => {
  const [activeSection, setActiveSection] = useState("chats");

  return (
    <div className="flex-1 min-w-[350px] max-h-[620px] bg-white rounded-xl shadow p-6">
      <h2 className="text-xl font-medium mb-4">Chats & Summary</h2>

      {/* TAB BUTTONS */}
      <div className="flex border-b border-gray-300 mb-4">
        <button
          onClick={() => setActiveSection("chats")}
          className={`px-4 py-2 font-semibold ${
            activeSection === "chats"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-700"
          }`}
        >
          Chats
        </button>

        <button
          onClick={() => setActiveSection("summary")}
          className={`px-4 py-2 font-semibold ${
            activeSection === "summary"
              ? "border-b-2 border-blue-600 text-blue-600"
              : "text-gray-700"
          }`}
        >
          Summary
        </button>
      </div>

      {/* DISPLAY AREA */}
      <div className="w-full max-h-[460px] aspect-square bg-gray-100 rounded-lg flex items-center justify-center">
        {activeSection === "chats" && <Chats />}
        {activeSection === "summary" && <Summary />}
      </div>
    </div>
  );
};

export default ChatBox;
