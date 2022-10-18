import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

export interface AudioProps {
  src: string;
}


export function Audio({src}: AudioProps) {
  return (
    <>
      <AudioPlayer
        src={src}
      />
    </>
  );
}
