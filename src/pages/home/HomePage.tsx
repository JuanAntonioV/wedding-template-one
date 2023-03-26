import HeroSection from "../../common/HeroSection";
import MainHeader from "../../components/headers/MainHeader";
import SectionTimer from "../../common/SectionTimer";
import SectionWedding from "../../common/SectionWedding";
import SectionLocation from "../../common/SectionLocation";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <MainHeader/>

            <SectionTimer/>
            <SectionWedding/>
            <SectionLocation/>
        </>
    );
};

export default HomePage;