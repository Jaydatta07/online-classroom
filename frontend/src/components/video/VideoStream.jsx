import React from "react";
import VideoS from "./VideoS";
import Chats from "../chat/Chatbox";

const VideoStream = () => {
  return (
    <div className="w-full min-h-screen bg-gray-100 p-0">
      <div className="flex gap-6 w-full flex-wrap">
        <VideoS />
        <Chats />
      </div>
    </div>
  );
};

export default VideoStream;
