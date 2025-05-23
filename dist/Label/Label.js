var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import { jsxs as _jsxs } from "react/jsx-runtime";
const Label = (_a) => {
    var { text, status = "approved", svg } = _a, props = __rest(_a, ["text", "status", "svg"]);
    const statusClasses = {
        approved: "bg-label-approved text-label-approved-text",
        pending: "bg-label-pending text-label-pending-text",
        rejected: "bg-label-rejected text-label-rejected-text",
        disabled: "bg-label-disabled text-label-disabled-text",
        info: "bg-label-info text-label-info-text",
    };
    return (_jsxs("label", Object.assign({}, props, { className: [
            "font-bold rounded-lg text-center uppercase tracking-wide px-2 py-1 text-sm flex items-center",
            statusClasses[status],
        ].join(" "), children: [svg && svg, text] })));
};
export default Label;
