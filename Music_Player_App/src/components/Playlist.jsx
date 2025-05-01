const songs = [
    { title: "Epic Tune", artist: "Guruji", url: "/songs/song1.mp3", cover: "/covers/cover1.jpg" },
    { title: "Next Beat", artist: "Guruji", url: "/songs/song2.mp3", cover: "/covers/cover2.jpg" }
  ];
  
  export default function Playlist() {
    return (
      <div className="mt-10 w-full max-w-md">
        <h3 className="text-xl mb-4">Playlist</h3>
        <div className="grid gap-4">
          {songs.map((song, i) => (
            <div key={i} className="flex items-center bg-gray-700 p-3 rounded-lg">
              <img src={song.cover} alt="cover" className="w-12 h-12 rounded mr-3" />
              <div>
                <p className="font-medium">{song.title}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  