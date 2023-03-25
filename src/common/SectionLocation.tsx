import LocationIcon from "../assets/icons/LocationIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import TimeIcon from "../assets/icons/TimeIcon";

const SectionLocation = () => {
    return (
        <section className={'h-[50rem] sm:h-[55rem] text-white relative'}>
            <div className={'brightness-50 w-full h-full rounded-t-3xl overflow-hidden'}>
                <div className={'w-full h-full brightness-50 bg-heroImage bg-center bg-top'}></div>
            </div>

            <div className={'absolute top-0 left-1/2 -translate-x-1/2 space-y-8 w-full py-8'}>
                <h2 className={'font-inter font-semibold text-lg text-center sm:text-xl'}>Location & Information</h2>

                <div className={'px-6 space-y-4'}>
                    <div className={'flex items-center gap-x-4'}>
                        <div>
                            <LocationIcon width={24} color={'#fff'}/>
                        </div>

                        <span className={'font-light'}>Regale Convetion Center at Pavilion Room
                            Jl. H. Adam Malik No.68-88</span>
                    </div>

                    <div className={'flex items-center gap-x-4'}>
                        <div>
                            <CalendarIcon width={24} color={'#fff'}/>
                        </div>

                        <span className={'font-light'}>Kamis, 20 April 2023</span>
                    </div>

                    <div className={'flex items-center gap-x-4'}>
                        <div>
                            <TimeIcon width={24} color={'#fff'}/>
                        </div>

                        <span className={'font-light'}>18.00 - Selesai</span>
                    </div>
                </div>

                <h2 className={'font-inter font-semibold text-base text-center sm:text-xl'}>Maps Location</h2>

                <div className={'flexCenter mx-4'}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.930891559347!2d98.66794571429315!3d3.603299551198787!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131dd655f709d%3A0x3d966cdd0627c43b!2sREGALE%20International%20Convention%20Centre!5e0!3m2!1sid!2sid!4v1679734403272!5m2!1sid!2sid"
                        width="100%" height="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>

            <div className={'absolute bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 w-full px-8'}>
                <div className={'w-full bg-white h-[250px] relative shadow-xl rounded flexCenter'}>
                    <div className={'space-y-8 w-full px-6'}>
                        <p className={'text-center font-sofia text-black text-xl'}>Please, <br/>
                            take a moment and <br/>
                            respond to our invitation</p>

                        <div className={'bg-black font-inter text-white text-center w-full py-2 rounded'}>
                            <p className={'font-inter'}>RSVP WILL BE OPEN UNTIL</p>
                            <p className={'font-inter'}>18 APRIL 2023</p>
                        </div>
                    </div>
                </div>

                <div className={'absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full'}>
                    <div className={'flexBetween w-full'}>
                        <img src="/assets/img/flower-left.png" alt="Flower Left"/>
                        <img src="/assets/img/flower-right.png" alt="Flower Right"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionLocation;