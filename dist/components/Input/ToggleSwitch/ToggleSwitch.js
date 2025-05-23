import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const ToggleSwitch = ({ name = "toggle", defaultChecked = false, onChange }) => {
    const [enabled, setEnabled] = useState(defaultChecked);
    const toggle = () => {
        const newState = !enabled;
        setEnabled(newState);
        if (onChange)
            onChange(newState);
    };
    return (_jsxs("div", { className: "flex items-center justify-center min-h-screen", children: [_jsx("input", { className: "hidden", type: "checkbox", checked: enabled, onChange: toggle, name: name, id: name }), _jsx("div", { onClick: toggle, className: `w-12 h-7 flex items-center rounded-full p-0.5 cursor-pointer transition-colors duration-300
          ${enabled ? "bg-success" : "input-toggle"}`, children: _jsx("div", { className: `bg-white w-6 h-6 rounded-full shadow-md transform transition-transform duration-300
            ${enabled ? "translate-x-5" : "translate-x-0"}` }) })] }));
};
export default ToggleSwitch;
