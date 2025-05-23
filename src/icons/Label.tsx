
interface LabelIconProps {
    color?: string
    height?: number;
    width?: number;
}

const LabelIcon = ({ color = "#00ABF4", height = 17, width = 12 }: LabelIconProps) => {
    return (
        <svg width={width} height={height} viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M9.33329 1.75H2.66663C1.97627 1.75 1.41663 2.30964 1.41663 3V14.1794L5.17306 12.0328C5.68545 11.74 6.31447 11.74 6.82686 12.0328L10.5833 14.1794V3C10.5833 2.30964 10.0236 1.75 9.33329 1.75ZM2.66663 0.5C1.28591 0.5 0.166626 1.61929 0.166626 3V15.6153C0.166626 15.9353 0.512243 16.1358 0.790017 15.9771L5.79323 13.1181C5.92133 13.0449 6.07859 13.0449 6.20668 13.1181L11.2099 15.9771C11.4877 16.1358 11.8333 15.9353 11.8333 15.6153V3C11.8333 1.61929 10.714 0.5 9.33329 0.5H2.66663Z" fill={color} />
        </svg>

    );
};  

export default LabelIcon;