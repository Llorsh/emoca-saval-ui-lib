import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import SearchSVG from "../Svg/Search";
import XSVG from "../Svg/X";
const SearchInput = ({ value, setValue, }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (_jsxs("div", { className: "flex flex-col items-center justify-center min-h-[200px] bg-gray-100 p-6 rounded-lg", children: [!isOpen && (_jsx("button", { onClick: () => setIsOpen(true), className: "bg-sky-500 text-white p-4 rounded-full shadow-lg hover:bg-sky-600", children: _jsx(SearchSVG, {}) })), isOpen && (_jsxs("div", { className: "mt-4 flex items-center border border-sky-400 rounded-full px-4 py-2 bg-white shadow-md w-[320px] transition-all duration-300", children: [_jsx("input", { type: "text", placeholder: "\u00BFQu\u00E9 est\u00E1s buscando?", value: value, onChange: (e) => setValue(e.target.value), className: "flex-1 outline-none text-gray-700 placeholder-gray-400" }), value ? (_jsx("button", { onClick: () => {
                            setValue("");
                            setIsOpen(false);
                        }, className: "text-white bg-sky-400 rounded-full p-2 ml-2 hover:bg-sky-500", children: _jsx(XSVG, { size: 16 }) })) : (_jsx("button", { className: "text-white bg-sky-400 rounded-full p-2 ml-2 hover:bg-sky-500", children: _jsx(SearchSVG, { size: 16 }) }))] }))] }));
};
export default SearchInput;
