import Container from "../../components/containers/Container";
import HeroSection from "../../common/HeroSection";
import MainHeader from "../../components/headers/MainHeader";
import SectionTimer from "../../common/SectionTimer";

const HomePage = () => {
    return (
        <Container>
            <HeroSection/>
            <MainHeader/>

            <SectionTimer/>
        </Container>
    );
};

export default HomePage;