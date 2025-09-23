"use client";
import { useRef, useState, useEffect } from "react";

export default function RetroPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime);
      setDuration(audio.duration || 0);
    };

    audio.addEventListener("timeupdate", updateProgress);
    audio.addEventListener("loadedmetadata", updateProgress);

    return () => {
      audio.removeEventListener("timeupdate", updateProgress);
      audio.removeEventListener("loadedmetadata", updateProgress);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!audioRef.current) return;
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setProgress(time);
  };

  return (
    <div className="w-full max-w-xs bg-black border-2 border-green-500 rounded-xl shadow-[0_0_20px_rgba(0,255,0,0.5)] p-4 font-mono text-green-400">
      <p className="text-sm text-center font-semibold mb-2 truncate">
        🎵 Tocando: Elvis Suspicious Minds.mp3
      </p>

      {/* Barra de progresso */}
      <input
        type="range"
        min={0}
        max={duration || 0}
        value={progress}
        onChange={handleSeek}
        className="w-full accent-green-500"
      />
      <div className="flex justify-between text-xs text-green-300 mt-1">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controles */}
      <div className="flex justify-center gap-4 mt-4">
        <button
          className="bg-black border-2 border-green-500 rounded-full w-10 h-10 flex items-center justify-center text-lg hover:bg-green-600 hover:text-black transition"
        >
          ⏮
        </button>
        <button
          onClick={togglePlay}
          className="bg-black border-2 border-green-500 rounded-full w-12 h-12 flex items-center justify-center text-xl hover:bg-green-600 hover:text-black transition"
        >
          {isPlaying ? "⏸" : "▶️"}
        </button>
        <button
          className="bg-black border-2 border-green-500 rounded-full w-10 h-10 flex items-center justify-center text-lg hover:bg-green-600 hover:text-black transition"
        >
          ⏭
        </button>
      </div>

      {/* Áudio real */}
      <audio ref={audioRef} src="/elvis.mp3" />
    </div>
  );
}

// Utilitário para formatar o tempo em mm:ss
function formatTime(time: number) {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}
