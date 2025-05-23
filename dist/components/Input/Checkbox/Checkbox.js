import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckIcon } from "../../../icons";
import { useState, useEffect } from "react";
const Checkbox = ({ name = "checkbox", defaultChecked = false, onChange }) => {
    const [checked, setChecked] = useState(defaultChecked);
    useEffect(() => {
        setChecked(defaultChecked);
    }, [defaultChecked]);
    const toggleCheckbox = () => {
        const newChecked = !checked;
        setChecked(newChecked);
        if (onChange)
            onChange(newChecked);
    };
    return (_jsxs(_Fragment, { children: [_jsx("input", { className: "hidden", type: "checkbox", checked: checked, onChange: toggleCheckbox, name: name, id: name }), _jsx("div", { role: "checkbox", "aria-checked": checked, tabIndex: 0, className: `w-6 h-6 flex items-center justify-center rounded-lg border-2 transition-colors ${checked ? " border-white bg-success" : "border-gray-300 bg-white"} cursor-pointer`, onClick: toggleCheckbox, onKeyDown: (e) => {
                    if (e.key === "Enter" || e.key === " ")
                        toggleCheckbox();
                }, children: checked && _jsx(CheckIcon, {}) })] }));
};
export default Checkbox;
