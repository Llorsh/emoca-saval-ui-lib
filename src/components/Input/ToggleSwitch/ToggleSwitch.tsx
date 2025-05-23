import { useState } from "react";

interface ToggleSwitchProps {
  name?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const ToggleSwitch = ({ name = "toggle", defaultChecked = false, onChange }: ToggleSwitchProps) => {
  const [enabled, setEnabled] = useState(defaultChecked);

  const toggle = () => {
    const newState = !enabled;
    setEnabled(newState);
    if (onChange) onChange(newState);
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <input className="hidden" type="checkbox" checked={enabled} onChange={toggle} name={name} id={name} />
      <div
        onClick={toggle}
        className={`w-12 h-7 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300
          ${enabled ? "bg-success" : "input-toggle"}`}
      >
        <div
          className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
            ${enabled ? "translate-x-5" : "translate-x-0"}`}
        />
      </div>
    </div>
  );
};

export default ToggleSwitch;
