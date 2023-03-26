import {useState} from "react";

const SectionWishes = () => {

    const [wishesValue, setWishesValue] = useState([
        {
            fullName: 'Vivian Octavia',
            wishes: 'Most inspiring couple ever, thank you for letting us witness your journey',
            posted: '2023-10-10'
        }
    ]);

    const addWishes = (e: any) => {
        e.preventDefault();

        const fullName = e.target.fullName.value;
        const wishes = e.target.wishes.value;

        const newWishes = {
            fullName,
            wishes,
            posted: `${new Date().getFullYear()}-${new Date().getMonth() + 1}-${new Date().getDate()}`
        };

        // @ts-ignore
        setWishesValue([...wishesValue, newWishes]);
    }

    return (
        <section>
            <div className={'space-y-6'}>
                <h2 className={'font-sofia text-3xl text-center'}>Wedding Wish</h2>

                <form className={'space-y-4 text-black w-full px-6 pb-8'} onSubmit={addWishes}>
                    <div className="flex flex-col space-y-2 pt-2">
                        <label htmlFor="fullName" className={'font-semibold'}>Full name</label>
                        <input type="text" id={'fullName'} name={'fullName'} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'E.g. John doe'} required/>
                    </div>

                    <div className="flex flex-col space-y-2 pt-2">
                        <label htmlFor="wishes" className={'font-semibold'}>Please write your wishes here</label>
                        <textarea id={'wishes'} name={'wishes'} rows={8} className={'bg-gray-200 px-6 py-3 rounded'} placeholder={'Type here...'} required/>
                    </div>

                    <p className={'text-gray-400'}>What do you think about us?</p>

                    <button className={'bg-black px-8 py-2 text-white rounded'} type={'submit'}>
                        Add Wishes
                    </button>
                </form>
            </div>

            <div className={'space-y-6 px-6 mt-8 mb-6'}>
                {
                    wishesValue.map((wish, index) => (
                        <div className={'bg-[#363636] p-4 text-white rounded'} key={index}>
                            <header className={'font-semibold'}>
                                {wish.fullName}
                            </header>

                            <main className={'font-light pb-6 text-sm pt-2'}>
                                {wish.wishes}
                            </main>

                            <footer className={'font-light text-xs'}>
                                {
                                    new Date(wish.posted).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })
                                }
                            </footer>
                        </div>
                    ))
                }
            </div>
        </section>
    );
};

export default SectionWishes;