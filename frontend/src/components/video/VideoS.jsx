import React, { useRef, useState } from "react";

const VideoS = () => {
  const localVideoRef = useRef(null);
  const [streaming, setStreaming] = useState(false);

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });

      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      setStreaming(true);
    } catch (error) {
      console.error("Camera Error:", error);
      alert("Unable to access camera.");
    }
  };

  const stopCamera = () => {
    const stream = localVideoRef.current?.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
    setStreaming(false);
  };

  return (
    <div className="w-full max-w-lg bg-white rounded-xl shadow p-4">
      <h2 className="text-xl font-medium mb-2">Your Camera</h2>

      <video
        ref={localVideoRef}
        autoPlay
        playsInline
        muted
        className="w-full aspect-square bg-black rounded-lg"
      />

      <div className="flex gap-4 mt-6">
        {!streaming ? (
          <button
            className="px-6 py-2 bg-green-600 text-white rounded-lg shadow"
            onClick={startCamera}
          >
            Start Camera
          </button>
        ) : (
          <button
            className="px-6 py-2 bg-red-600 text-white rounded-lg shadow"
            onClick={stopCamera}
          >
            Stop Camera
          </button>
        )}

        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow"
          disabled
        >
          Connect (Backend Required)
        </button>
      </div>
    </div>
  );
};

export default VideoS;
