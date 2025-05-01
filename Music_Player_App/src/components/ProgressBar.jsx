export default function ProgressBar({ progress, duration, onSeek }) {
    const handleChange = (e) => {
      onSeek(Number(e.target.value));
    };
  
    const formatTime = (t) =>
      isNaN(t) ? '0:00' : `${Math.floor(t / 60)}:${String(Math.floor(t % 60)).padStart(2, '0')}`;
  
    return (
      <div>
        <input
          type="range"
          min="0"
          max={duration}
          value={progress}
          onChange={handleChange}
          className="w-full accent-pink-500"
        />
        <div className="flex justify-between text-sm text-gray-400 mt-1">
          <span>{formatTime(progress)}</span>
          <span>{formatTime(duration)}</span>
        </div>
      </div>
    );
  }
  