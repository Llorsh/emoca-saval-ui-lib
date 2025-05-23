
interface CheckIconProps {
    color?: string;
    size?: number;
}

const CheckIcon = ({
    color = "#fff",
    size = 10
}: CheckIconProps) => {
    return (
        <svg width={size} height={size} viewBox="0 0 10 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M9.66661 0.926815C10.0828 1.29832 10.1135 1.93077 9.73513 2.33943L4.64254 7.83942C4.45518 8.04177 4.19158 8.15996 3.91313 8.16647C3.63467 8.17297 3.36565 8.06723 3.1687 7.87386L1.13166 5.87386C0.733905 5.48333 0.733905 4.85017 1.13166 4.45965C1.52942 4.06912 2.17431 4.06912 2.57206 4.45965L3.85379 5.71806L8.22784 0.994082C8.60623 0.585425 9.25039 0.555308 9.66661 0.926815Z" fill={color}/>
        </svg>
    );
};

export default CheckIcon;
