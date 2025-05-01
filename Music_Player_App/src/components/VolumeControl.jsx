import { useState, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function VolumeControl({ audioRef }) {
  const [volume, setVolume] = useState(1); // Default volume 1 (100%)

  // Effect to update volume in audio element
  useEffect(() => {
    if (audioRef && audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume, audioRef]);

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="flex items-center gap-2">
      <Volume2 size={24} className="text-white" />
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onChange={handleVolumeChange}
        className="w-32"
      />
      {volume === 0 && <VolumeX size={24} className="text-white" />}
    </div>
  );
}
