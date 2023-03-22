interface HamburgerMenuIconProps {
    width: number;
}

const HamburgerMenuIcon = ({width}: HamburgerMenuIconProps) => {
    return (
        <svg width={width + 2 ?? '18'} height={width ?? '16'} viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H18V2H0V0ZM0 7H12V9H0V7ZM0 14H18V16H0V14Z" fill="black"/>
        </svg>
    );
};

export default HamburgerMenuIcon;