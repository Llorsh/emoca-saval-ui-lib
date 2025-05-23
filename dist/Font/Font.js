import { jsx as _jsx } from "react/jsx-runtime";
const Heading = ({ as, children, className = '' }) => {
    const Tag = as;
    return _jsx(Tag, { className: className, children: children });
};
export default Heading;
