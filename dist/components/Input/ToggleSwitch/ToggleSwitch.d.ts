interface ToggleSwitchProps {
    name?: string;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
}
declare const ToggleSwitch: ({ name, defaultChecked, onChange }: ToggleSwitchProps) => import("react/jsx-runtime").JSX.Element;
export default ToggleSwitch;
