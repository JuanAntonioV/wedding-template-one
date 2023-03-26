import {useState} from "react";

const SectionAttendance = () => {

    const [success, setSuccess] = useState(false);

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSuccess(true);

        // clear form
        e.target.reset();
    }

    return (
        <section className={'relative -mb-16'}>
            <div className={'-translate-y-36 w-full px-6'}>
                <div className={'w-full bg-white py-6 relative shadow-xl rounded'}>
                    <div className={'space-y-8 w-full px-6'}>
                        <p className={'text-center font-sofia text-black text-xl'}>Please, <br/>
                            take a moment and <br/>
                            respond to our invitation</p>

                        <div className={'bg-black font-inter text-white text-center w-full py-1.5 rounded-xl text-sm'}>
                            <p className={'font-inter tracking-wider'}>RSVP WILL BE OPEN UNTIL</p>
                            <p className={'font-inter tracking-wider'}>18 APRIL 2023</p>
                        </div>
                    </div>

                    <h2 className={'text-black font-inter font-semibold text-lg pt-5 pb-4 text-center'}>RSVP</h2>

                    <form className={'space-y-4 text-black w-full px-4 pb-6'} onSubmit={handleSubmit}>
                        <div className={'space-y-2'}>
                            <span>Do you attending ?</span>

                            <div className="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       aria-labelledby="country-option-1" aria-describedby="country-option-1" checked required/>
                                <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                                    Yes, I will attend
                                </label>
                            </div>

                            <div className="flex items-center mb-4">
                                <input id="country-option-1" type="radio" name="countries" value="USA" className="h-4 w-4 border-gray-300 focus:ring-2 focus:ring-blue-300"
                                       aria-labelledby="country-option-1" aria-describedby="country-option-1" required/>
                                <label htmlFor="country-option-1" className="text-sm font-medium text-gray-900 ml-2 block">
                                    No, Sorry cant’t make it
                                </label>
                            </div>
                        </div>

                        <div className="flex flex-col space-y-2 pt-2">
                            <label htmlFor="fullName" className={'font-semibold'}>Full name</label>
                            <input type="text" id={'fullName'} name={'fullName'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. John doe'} required/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email" className={'font-semibold'}>Email</label>
                            <input type="text" id={'email'} name={'email'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. johndoe@gmail.com'} required/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="phone" className={'font-semibold'}>Phone number / Whatsapp</label>
                            <input type="text" id={'phone'} name={'phone'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. 085922992'} required/>
                        </div>

                        <div className="flex flex-col space-y-2">
                            <label htmlFor="phone" className={'font-semibold'}>Total guests (including you max. 2 guests
                                (unless otherwise stated)</label>
                            <input type="text" id={'phone'} name={'phone'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. 085922992'} required/>
                        </div>

                        <div className={'flexCenter pt-4'}>
                            <button className={'bg-black px-10 py-2 text-white rounded'}>
                                Submit
                            </button>
                        </div>

                        {success && (
                            <div className={'flexCenter'}>
                                <p className={'text-center text-green-500 font-inter font-semibold text-sm'}>Thank you for your response</p>
                            </div>
                        )}
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

export default SectionAttendance;