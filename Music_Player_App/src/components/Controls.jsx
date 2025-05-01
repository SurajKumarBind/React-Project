import { Play, Pause, SkipBack, SkipForward } from "lucide-react";

export default function Controls({ isPlaying, onPlayPause, onPrev, onNext }) {
  return (
    <div className="flex items-center justify-center gap-6">
      <button
        onClick={onPrev}
        className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
        title="Previous"
      >
        <SkipBack size={24} />
      </button>

      <button
        onClick={onPlayPause}
        className="p-4 rounded-full bg-pink-500 hover:bg-pink-600 text-white"
        title={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <Pause size={28} /> : <Play size={28} />}
      </button>

      <button
        onClick={onNext}
        className="p-3 rounded-full bg-gray-700 hover:bg-gray-600"
        title="Next"
      >
        <SkipForward size={24} />
      </button>
    </div>
  );
}
