import HeroSection from "../../common/HeroSection";
import MainHeader from "../../components/headers/MainHeader";
import SectionTimer from "../../common/SectionTimer";
import SectionWedding from "../../common/SectionWedding";
import SectionLocation from "../../common/SectionLocation";
import SectionWishes from "../../common/SectionWishes";
import SectionAttendance from "../../common/SectionAttendance";
import SectionGallery from "../../common/SectionGallery";
import RandomParticles from "../../components/particles/RandomParticles";
import {useEffect, useState} from "react";

const HomePage = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const playAudio = () => {
        setIsPlaying(true);
    }

    useEffect(() => {
        playAudio();
    }, []);

    return (
        <>
            <audio autoPlay={isPlaying} loop={true} src={'/assets/sounds/sound.mp3'}/>

            <div className={'max-w-2xl mx-auto'}>
                <HeroSection/>
                <MainHeader/>

                <SectionTimer/>
                <SectionWedding/>
                <SectionLocation/>
                <SectionAttendance/>
                <SectionGallery/>
                <SectionWishes/>

                <RandomParticles/>
            </div>

            <footer>
                <div className={'py-4 text-center text-xs text-gray-400'}>
                    <p>© 2023 Rendy Iqbal & Christina Adel</p>
                    <p>Developed by Juan Antonio Vivaldy</p>
                </div>
            </footer>
        </>
    );
};

export default HomePage;