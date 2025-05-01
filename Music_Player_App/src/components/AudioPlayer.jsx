import { useRef, useState } from "react";
import { useAudio } from "../hooks/useAudio";
import Controls from "./Controls";
import VolumeControl from "./VolumeControl";
import ProgressBar from "./ProgressBar";

// 35 songs ka array
const songs = [
  {
    title: "Aankh Hai Bhari Bhari Aur Tum",
    artist: "Kumar Sanu",
    url: "public/songs/Aankh_Hai_Bhari_Bhari.mp3",
    cover: "public/covers/img1.jpg",
  },
  {
    title: "Allah_Waariyan",
    artist: "Kumar Sanu",
    url: "public/songs/Bekhayali_(Arijit_Singh_Version).m4a",
    cover: "public/covers/img1.jpg",
  },
  {
    title: "Bekhayali.mp3",
    artist: "Arijit_Singh",
    url: "public/songs/Bekhayali_(Arijit_Singh).mp3",
    cover: "public/covers/img1.jpg",
  },
  {
    title: "Bichdann",
    artist: "rahat_Fateh_Ali_Khan",
    url: "public/songs/Bichdann_(Rahat_Fateh_Ali_Khan).mp3",
    cover: "public/covers/img1.jpg",
  },
  {
    title: "Bol_Na_Halke_Halke",
    artist: "unknown",
    url: "public/songs/Bol_Na_Halke_Halke.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Ek_Tarfa",
    artist: "unknown",
    url: "public/songs/Ek_Tarfa.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Jo_Pallu_Gira_Diya",
    artist: "unknown",
    url: "public/songs/Jo_Pallu_Gira_Diya.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Jogi",
    artist: "unknown",
    url: "public/songs/Jogi.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "KALI_KALI_ZULFON",
    artist: "nusrat_Fateh_Ali_Khan",
    url: "public/songs/KALI_KALI_ZULFON(Nusrat_Fateh_Ali_Khan).mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Khair_Mangda",
    artist: "atif_Aslam",
    url: "public/songs/Khair_Mangda(Atif_Aslam).mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Khairiyat",
    artist: "atif_Aslam",
    url: "public/songs/Khairiyat.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Kisi_Se_Tum_Pyar_Karo",
    artist: "andaaz_Songs",
    url: "public/songs/Kisi_Se_Tum_Pyar_Karo(Andaaz_Songs).mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Koi_dil_pe_kabu_kar_gya",
    artist: "unknown",
    url: "public/songs/Koi_dil_pe_kabu_kar_gya.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Lut_Gaye",
    artist: "imran_Hasmi",
    url: "public/songs/Lut_Gaye_imran_Hasmi.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Main_Jis_Din_Bhulaa_Du ",
    artist: "jubin_Nautiyal",
    url: "public/songs/Main_Jis_Din_Bhulaa_Du Jubin_Nautiyal.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Mainu_Ishq_Da_Lagya_Rog",
    artist: "tulsi_Kumar",
    url: "public/songs/Mainu_Ishq_Da_Lagya_Rog(Tulsi_Kumar).mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Mange_fakir_dua_allah",
    artist: "unknown",
    url: "public/songs/Mange_fakir_dua_allah.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Mannata_Ve",
    artist: "unknown",
    url: "public/songs/Mannata_Ve.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Meri_Good_Morning",
    artist: "unknown",
    url: "public/songs/Meri_Good_Morning.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Mil_Jao_tum_mil_jaye_duniya",
    artist: "unknown",
    url: "public/songs/Mil_Jao_tum_mil_jaye_duniya.(128k).mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Mil_Jao_tum_mil_jaye_duniya",
    artist: "unknown",
    url: "public/songs/Mil_Jao_Tum_mil_Jaye_Duniya.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Mujh_Mein_Tu",
    artist: "special_26",
    url: "public/songs/Mujh_Mein_Tu_Special_26.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Naina_Ashq_Na_Ho",
    artist: "arijit_Singh",
    url: "public/songs/Naina_Ashq_Na_Ho_-_Arijit_Singh.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Naino_Ne_Baandhi",
    artist: "unknown",
    url: "public/songs/Naino_Ne_Baandhi.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Nazm_Nazm",
    artist: "unknown",
    url: "public/songs/Nazm_Nazm.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Royi_Na_Je_Yaad_Meri_Aayi_Ve",
    artist: "unknown",
    url: "public/songs/Royi_Na_Je_Yaad_Meri_Aayi_Ve.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Rula_Ke_Gaya_Ishq",
    artist: "unknown",
    url: "public/songs/Rula_Ke_Gaya_Ishq.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Sanu_Ek_Pal_Chain",
    artist: "unknown",
    url: "public/songs/Sanu_Ek_Pal_Chain.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Tere_Naam_Humne_Kiya_Hai",
    artist: "kumar_Sanu",
    url: "public/songs/Tere_Naam_Humne_Kiya_Hai.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Thodi_Jagah",
    artist: "unknown",
    url: "public/songs/Thodi_Jagah.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Tu_Banja_Gali_Benaras_Ki",
    artist: "unknown",
    url: "public/songs/Tu_Banja_Gali_Benaras_Ki.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Tum_Jo_Aaye_Zindagi_Mein",
    artist: "Unknown",
    url: "public/songs/Tum_Jo_Aaye_Zindagi_Mein.mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Udja_Kale_Kawa",
    artist: "udit_Narayan",
    url: "public/songs/Udja_Kale_Kawa(Udit_Narayan).mp3",
    cover: "public/covers/img1.jpg",
  }
  ,
  {
    title: "Zindagi_Bewafa",
    artist: "Udit_Narayan",
    url: "public/songs/Zindagi_Bewafa.mp3",
    cover: "public/covers/img1.jpg",
  }
];

export default function AudioPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);  // Current song ka index track karenge
  const audioRef = useRef(null);

  const {
    isPlaying,
    togglePlay,
    progress,
    duration,
    seek,
    playNext,
    playPrev,
  } = useAudio(songs[currentSongIndex].url, audioRef);  // Current song ki audio properties

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);  // Agla song play karo, loop ho jayega
  };

  const handlePrev = () => {
    setCurrentSongIndex((prevIndex) =>
      prevIndex === 0 ? songs.length - 1 : prevIndex - 1
    );  // Pehla song, last song se switch karo
  };

  return (
    <div className="bg-gray-900 p-6 rounded-3xl shadow-xl w-full max-w-md border border-gray-700">
      <img
        src={songs[currentSongIndex].cover}
        alt="Cover"
        className="rounded-4xl w-full h-70 object-cover mb-4"
      />

      <div className="flex flex-col items-center text-center">
        <h2 className="text-2xl font-bold text-white">{songs[currentSongIndex].title}</h2>
        <p className="text-sm text-gray-400 mb-4">{songs[currentSongIndex].artist}</p>
      </div>

      <Controls
        isPlaying={isPlaying}
        onPlayPause={togglePlay}
        onNext={handleNext}
        onPrev={handlePrev}
      />

      <div className="flex justify-center mt-4">
        <VolumeControl audioRef={audioRef} />
      </div>

      <div className="mt-6">
        <ProgressBar progress={progress} duration={duration} onSeek={seek} />
      </div>
    </div>
  );
}
