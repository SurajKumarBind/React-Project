import React from "react";
import Navbar from "./components/Navbar";
import AudioPlayer from "./components/AudioPlayer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 pt-20">
      <Navbar />
      <div className="flex flex-col items-center justify-center px-4 mt-10">
        <AudioPlayer />
      </div>
    </div>
  );
}

export default App;
