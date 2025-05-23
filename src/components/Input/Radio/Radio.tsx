import { CheckIcon } from "../../../icons";
import { useState, useEffect } from "react";

interface RadioProps {
  name?: string;
  defaultChecked?: boolean;
  onChange?: (checked: boolean) => void;
}

const Radio = ({
  name = "radio",
  defaultChecked = false,
  onChange
}: RadioProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const toggleCheckbox = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    if (onChange) onChange(newChecked);
  };

  return (
    <>
      <input className="hidden" type="checkbox" checked={checked} onChange={toggleCheckbox} name={name} id={name} />
      <div
        role="checkbox"
        aria-checked={checked}
        tabIndex={0}
        className={`w-6 h-6 flex items-center justify-center rounded-full border-2 transition-colors ${checked ? " border-white bg-success" : "border-gray-300 bg-white"
          } cursor-pointer`}
        onClick={toggleCheckbox}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") toggleCheckbox();
        }}
      >
        {checked && <CheckIcon />}
      </div>
    </>
  );
};

export default Radio;
