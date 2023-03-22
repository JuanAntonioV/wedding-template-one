import {BsArrowDown} from "react-icons/bs";
import {useEffect, useRef} from "react";

const HeroSection = () => {

    const scrollInfoRef = useRef(null);

    useEffect(() => {
        // hide the scrollInfoRef when the user scrolls down
        const {style}: any = scrollInfoRef.current;

        const handleScroll = () => {
            if (window.scrollY > 0) {
                style.opacity = '0';
                style.transition = 'opacity 0.5s ease-in-out';
            } else {
                style.opacity = '1';
                style.transition = 'opacity 0.5s ease-in-out';
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return (
        <section className={'w-full h-screen relative text-white'}>
            <img src="/assets/img/hero.jpg" alt="Hero Image" className={'w-full h-full ' +
                'object-cover brightness-50'}/>

            <div className={'absolute top-1/2 -translate-y-1/2 text-center w-full space-y-4 pb-12'}>
                <h3 className={'font-sofia text-xl'}>the wedding of</h3>

                <div className={'pb-6'}>
                    <h2 className={'font-freebooster text-4xl'}>Juan Antonio , S. Kom</h2>
                    <h2 className={'font-atlane text-3xl pb-3'}>&</h2>
                    <h2 className={'font-freebooster text-4xl'}>Christina Adel , S. Kom</h2>

                    <p className={'font-medium mt-2'}>Kamis, 20 April 2023</p>
                </div>
            </div>

            <div className={'absolute bottom-32 left-1/2 -translate-x-1/2 flexCenter flex-col gap-y-4'} ref={scrollInfoRef}>
                <span className={'text-lg'}>Scroll down</span>
                <BsArrowDown size={30} className={'animate-bounce'}/>
            </div>
        </section>
    );
};

export default HeroSection;