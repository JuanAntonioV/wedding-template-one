const SectionWedding = () => {
    return (
        <section>
            <div className="py-12 space-y-16 mx-5">
                <h2 className={'font-delycost text-3xl text-center'}>The Happy Couple</h2>

                <div>
                    <div className={'w-56 h-56 bg-red-200 rounded-full mx-auto'}>
                        <img src="/assets/img/male.png" alt="Male" className={'w-full h-full object-cover'}/>
                    </div>

                    <div className={'text-center space-y-4 mt-5'}>
                        <h3 className={'font-delycost text-2xl'}>Rendy Iqbal, S.Kom</h3>
                        <p className={'text-xs w-60 mx-auto'}>Putra Pertama dari Bapak Muhammad Iqbal dan Ibu Siti Nurhayati</p>
                    </div>
                </div>

                <div className={'my-8 flex items-center gap-x-4'}>
                    <div className={'w-full h-[1px] bg-gray-400'}></div>
                    <span className={'font-inter font-semibold text-lg'}>&</span>
                    <div className={'w-full h-[1px] bg-gray-400'}></div>
                </div>

                <div>
                    <div className={'w-56 h-56 bg-red-200 rounded-full mx-auto'}>
                        <img src="/assets/img/female.png" alt="Male" className={'w-full h-full object-cover'}/>
                    </div>

                    <div className={'text-center space-y-4 mt-5'}>
                        <h3 className={'font-delycost text-2xl'}>Christina Adel, S.Kom</h3>
                        <p className={'text-xs w-60 mx-auto'}>Putra Pertama dari Bapak Muhammad Iqbal dan Ibu Siti Nurhayati</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SectionWedding;