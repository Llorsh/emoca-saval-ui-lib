import type { JSX } from "react";
export interface LabelProps {
    /** Texto del label */
    text: string;
    /** Estado visual del label */
    status?: "approved" | "pending" | "rejected" | "disabled" | "info";
    svg?: JSX.Element;
}
declare const Label: ({ text, status, svg, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
