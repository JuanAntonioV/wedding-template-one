import Countdown from "react-countdown";
import {useState} from "react";
import DefaultTimer from "../components/timers/DefaultTimer";

interface RendererProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
}

const TimerSection = () => {

    const [timer, setTimer] = useState(Date.now() + 10000)

    const renderer = ({days, hours, minutes, seconds, completed}: RendererProps) => {
        if (completed) {
            return <DefaultTimer days={days} hours={hours} minutes={minutes} seconds={seconds}/>;
        } else {
            return <DefaultTimer days={days} hours={hours} minutes={minutes} seconds={seconds}/>;
        }
    };

    return (
        <section className={'py-16 text-white relative'}>
            <div className={'brightness-50 w-full h-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 -z-10'}>
                <div className={'w-full h-full brightness-50 bg-sectionImage bg-center'}></div>
            </div>

            <div className={'space-y-8 w-full'}>
                <h2 className={'font-delycost text-4xl pb-2 text-center'}>Save The Date</h2>

                <p className={'text-xs w-[300px] mx-auto text-center'}>Pernikahan adalah ibadah, dan setiap ibadah bermuara pada
                    cinta-Nya sebagai tujuan. Sudah sewajarnya setiap upaya
                    meraih cinta-Nya dilakukan dengan sukacita.</p>

                <div className={'pb-2'}>
                    <Countdown date={timer} renderer={renderer} overtime={true}/>
                </div>

                <div className={'w-full h-[180px] px-6 mx-auto sm:w-[500px] sm:h-[250px]'}>
                    <img src="/assets/img/picture-one.jpg" alt="Picture One" className={'w-full h-full object-cover rounded-xl'}/>
                </div>
            </div>
        </section>
    );
};

export default TimerSection;