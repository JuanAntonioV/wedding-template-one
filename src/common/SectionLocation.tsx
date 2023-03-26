import LocationIcon from "../assets/icons/LocationIcon";
import CalendarIcon from "../assets/icons/CalendarIcon";
import TimeIcon from "../assets/icons/TimeIcon";

const SectionLocation = () => {
    return (
        <section className={'h-[50rem] sm:h-[55rem] text-white relative'}>
            <div className={'brightness-50 w-full h-full rounded-t-3xl overflow-hidden'}>
                <div className={'w-full h-full brightness-50 bg-heroImage bg-center bg-top'}></div>
            </div>

            <div className={'absolute top-0 left-1/2 -translate-x-1/2 space-y-8 w-full py-8 max-w-2xl'}>
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

            <div className={'absolute bottom-0 translate-y-[45rem] left-1/2 -translate-x-1/2 w-full px-8'}>
                <div className={'w-full bg-white py-6 relative shadow-xl rounded'}>
                    <div className={'space-y-8 w-full px-4'}>
                        <p className={'text-center font-sofia text-black text-xl'}>Please, <br/>
                            take a moment and <br/>
                            respond to our invitation</p>

                        <div className={'bg-black font-inter text-white text-center w-full py-1.5 rounded-xl'}>
                            <p className={'font-inter tracking-wider'}>RSVP WILL BE OPEN UNTIL</p>
                            <p className={'font-inter tracking-wider'}>18 APRIL 2023</p>
                        </div>
                    </div>

                    <h2 className={'text-black font-inter font-semibold text-lg pt-5 pb-4 text-center'}>RSVP</h2>

                    <form className={'space-y-4 text-black w-full px-4 pb-8'}>
                        <div className={'space-y-2'}>
                            <span>Do you attending ?</span>

                            <div className="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       aria-labelledby="country-option-1" aria-describedby="country-option-1" checked/>
                                <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                                    Yes, I will attend
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       aria-labelledby="country-option-1" aria-describedby="country-option-1" checked/>
                                <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                                    No, Sorry cant’t make it
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 pt-2">
                            <label htmlFor="fullName" className={'font-semibold'}>Full name</label>
                            <input type="text" id={'fullName'} name={'fullName'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. John doe'}/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className={'font-semibold'}>Email</label>
                            <input type="text" id={'email'} name={'email'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. johndoe@gmail.com'}/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="phone" className={'font-semibold'}>Phone number / Whatsapp</label>
                            <input type="text" id={'phone'} name={'phone'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. 085922992'}/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="phone" className={'font-semibold'}>Total guests (including you max. 2 guests
                                (unless otherwise stated)</label>
                            <input type="text" id={'phone'} name={'phone'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. 085922992'}/>
                        </div>

                        <div className={'flexCenter pt-2'}>
                            <button className={'bg-black px-10 py-2 text-white rounded-xl'}>
                                Submit
                            </button>
                        </div>
                    </form>
                </div>

                <div className={'absolute top-36 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full'}>
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