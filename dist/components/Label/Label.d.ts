import type { ReactNode } from "react";
export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
    /** Texto del label */
    text: string;
    /** Estado visual del label */
    status?: "approved" | "pending" | "rejected" | "disabled" | "info";
    /** Icono opcional */
    svg?: ReactNode;
}
declare const Label: ({ text, status, svg, ...props }: LabelProps) => import("react/jsx-runtime").JSX.Element;
export default Label;
//# sourceMappingURL=Label.d.ts.map