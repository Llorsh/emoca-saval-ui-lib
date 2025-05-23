export interface ButtonProps {
    /** How large should the button be? */
    size?: "xs" | "sm" | "base" | "lg" | "xl";
    /** Optional click handler */
    onClick?: () => void;
    /** Optional type */
    type?: "button" | "submit" | "reset";
    /** Optional disabled */
    disabled?: boolean;
    buttonType?: "primary" | "primaryDoctor" | "secondary" | "outline" | "text";
    /** Button contents */
    children?: React.ReactNode;
}
/** Primary UI component for user interaction */
declare const Button: ({ size, type, disabled, buttonType, children, ...props }: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
//# sourceMappingURL=Button.d.ts.map