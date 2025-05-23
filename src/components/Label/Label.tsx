import type { ReactNode } from "react";

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  /** Texto del label */
  text: string;
  /** Estado visual del label */
  status?: "approved" | "pending" | "rejected" | "disabled" | "info";
  /** Icono opcional */
  svg?: ReactNode;
}

const Label = ({
  text,
  status = "approved",
  svg,
  ...props
}: LabelProps) => {
  const statusClasses = {
    approved: "bg-label-approved text-label-approved-text",
    pending: "bg-label-pending text-label-pending-text",
    rejected: "bg-label-rejected text-label-rejected-text",
    disabled: "bg-label-disabled text-label-disabled-text",
    info: "bg-label-info text-label-info-text",
  };

  return (
    <label
      {...props}
      className={[
        "font-bold rounded-lg text-center uppercase tracking-wide px-2 py-1 text-sm flex items-center",
        statusClasses[status],
      ].join(" ")}
    >
      {svg && svg}{text}
    </label>
  );
};

export default Label;
