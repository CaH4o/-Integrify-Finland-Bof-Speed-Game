import { useEffect, useState } from "react";

type returnValue = [
  playing: boolean,
  toggle: React.Dispatch<React.SetStateAction<void>>
];

export function useAudio(url: string): returnValue {
  const [audio] = useState<HTMLAudioElement>(new Audio(url));
  const [playing, setPlaying] = useState<boolean>(false);

  function toggle() {
    setPlaying(!playing);
  }

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(true));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
}
