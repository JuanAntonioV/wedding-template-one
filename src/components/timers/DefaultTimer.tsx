interface DefaultTimerProps {
    days: number,
    hours: number,
    minutes: number,
    seconds: number,
}

const DefaultTimer = ({days, hours, minutes, seconds}: DefaultTimerProps) => {
    return (
        <div className={'flexCenter gap-x-10'}>
            <div className={'text-center space-y-2'}>
                <p className={'text-4xl'}>{days}</p>
                <p className={'text-sm'}>Hari</p>
            </div>

            <div className={'text-center space-y-2'}>
                <p className={'text-4xl'}>{hours}</p>
                <p className={'text-sm'}>Jam</p>
            </div>

            <div className={'text-center space-y-2'}>
                <p className={'text-4xl'}>{minutes}</p>
                <p className={'text-sm'}>Menit</p>
            </div>

            <div className={'text-center space-y-2'}>
                <p className={'text-4xl'}>{seconds}</p>
                <p className={'text-sm'}>Detik</p>
            </div>
        </div>
    );
};

export default DefaultTimer;