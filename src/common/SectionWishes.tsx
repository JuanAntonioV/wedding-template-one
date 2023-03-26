const SectionWishes = () => {
    return (
        <section>
            <div className={'space-y-6'}>
                <h2 className={'font-sofia text-3xl text-center'}>Wedding Wish</h2>

                <form className={'space-y-4 text-black w-full px-6 pb-8'}>
                    <div className="flex flex-col space-y-2 pt-2">
                        <label htmlFor="fullName" className={'font-semibold'}>Full name</label>
                        <input type="text" id={'fullName'} name={'fullName'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. John doe'}/>
                    </div>

                    <div className="flex flex-col space-y-2 pt-2">
                        <label htmlFor="wishes" className={'font-semibold'}>Please write your wishes here</label>
                        <textarea id={'wishes'} name={'wishes'} rows={8} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'Type here...'}/>
                    </div>

                    <p className={'text-gray-400'}>What do you think about us?</p>

                    <button className={'bg-black px-8 py-2 text-white rounded'}>
                        Add Wishes
                    </button>
                </form>
            </div>

            <div className={'space-y-6 px-6 mt-8 mb-6'}>
                <div className={'bg-[#363636] p-4 text-white rounded'}>
                    <header className={'font-semibold'}>
                        Vivian Octavia
                    </header>

                    <main className={'font-light pb-6 text-sm pt-2'}>
                        Most inspiring couple ever, thank you for letting us witness your journey
                    </main>

                    <footer className={'font-light text-xs'}>
                        January 12, 2022
                    </footer>
                </div>

                <div className={'bg-[#363636] p-4 text-white rounded'}>
                    <header className={'font-semibold'}>
                        Vivian Octavia
                    </header>

                    <main className={'font-light pb-6 text-sm pt-2'}>
                        Most inspiring couple ever, thank you for letting us witness your journey
                    </main>

                    <footer className={'font-light text-xs'}>
                        January 12, 2022
                    </footer>
                </div>

            </div>
        </section>
    );
};

export default SectionWishes;