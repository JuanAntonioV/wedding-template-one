import HeroSection from "../../common/HeroSection";
import MainHeader from "../../components/headers/MainHeader";
import SectionTimer from "../../common/SectionTimer";
import SectionWedding from "../../common/SectionWedding";
import SectionLocation from "../../common/SectionLocation";
import SectionWishes from "../../common/SectionWishes";
import SectionAttendance from "../../common/SectionAttendance";

const HomePage = () => {
    return (
        <div className={'max-w-2xl mx-auto'}>
            <HeroSection/>
            <MainHeader/>

            <SectionTimer/>
            <SectionWedding/>
            <SectionLocation/>
            <SectionAttendance/>
            <SectionWishes/>
        </div>
    );
};

export default HomePage;