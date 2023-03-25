import HeroSection from "../../common/HeroSection";
import MainHeader from "../../components/headers/MainHeader";
import SectionTimer from "../../common/SectionTimer";
import SectionWedding from "../../common/SectionWedding";

const HomePage = () => {
    return (
        <>
            <HeroSection/>
            <MainHeader/>

            <SectionTimer/>
            <SectionWedding/>
        </>
    );
};

export default HomePage;