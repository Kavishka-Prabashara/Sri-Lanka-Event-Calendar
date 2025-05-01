import { useRef, useState } from "react";
import BGMusic from '../components/BGMusic.mp3';
import Thorana from '../components/Thorana.mp4';

const VesakThoranaPage = () => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    const toggleMusic = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center relative p-4">
            {/* Background Music */}
            <audio ref={audioRef} autoPlay loop>
                <source src={BGMusic} type="audio/mpeg" />
                Your browser does not support the audio element.
            </audio>

            {/* Music Toggle Button */}
            <button
                onClick={toggleMusic}
                className="absolute top-4 right-4 bg-white text-black px-4 py-2 rounded shadow-md z-10"
            >
                {isPlaying ? "🔇 Music Off" : "🔊 Music On"}
            </button>

            {/* Centered Video */}
            <div className="w-full max-w-3xl">
                <video
                    className="w-full h-auto rounded-lg"
                    src={Thorana}
                    controls
                    autoPlay
                    loop
                />
            </div>
        </div>
    );
};

export default VesakThoranaPage;
