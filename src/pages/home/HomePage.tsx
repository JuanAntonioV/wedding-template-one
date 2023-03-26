import HeroSection from "../../common/HeroSection";
import MainHeader from "../../components/headers/MainHeader";
import SectionTimer from "../../common/SectionTimer";
import SectionWedding from "../../common/SectionWedding";
import SectionLocation from "../../common/SectionLocation";
import SectionWishes from "../../common/SectionWishes";
import SectionAttendance from "../../common/SectionAttendance";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <MainHeader/>

            <SectionTimer/>
            <SectionWedding/>
            <SectionLocation/>
            <SectionAttendance/>
            <SectionWishes/>
        </>
    );
};

export default HomePage;