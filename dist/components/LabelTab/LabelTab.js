import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
const LabelTab = ({ text, isActive = false }) => {
    return (_jsxs("div", { className: "relative w-fit", children: [_jsx("div", { className: "flex items-center justify-center px-6 py-4 bg-white shadow rounded", children: _jsx("span", { className: `font-bold text-xl uppercase transition-colors ${isActive ? 'text-primary-hover' : 'text-gray-600'}`, children: text }) }), isActive && (_jsxs(_Fragment, { children: [_jsx("div", { className: "absolute bottom-0 left-0 w-full h-1 bg-primary-hover rounded-b" }), _jsx("div", { className: "absolute bottom-[-8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-primary-hover" })] }))] }));
};
export default LabelTab;
