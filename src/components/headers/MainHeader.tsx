import HamburgerMenuIcon from "../../assets/icons/HamburgerMenuIcon";

const MainHeader = () => {
    return (
        <header className={'h-24 bg-white flexBetween px-7'}>
            <HamburgerMenuIcon width={18}/>
            <h2 className={'font-sofia text-2xl'}>Your Happy Day</h2>
        </header>
    );
};

export default MainHeader;