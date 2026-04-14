import * as React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline";
};

export function Button({
  className = "",
  variant = "default",
  type = "button",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed";

  const styles =
    variant === "outline"
      ? "border border-gray-300 bg-white text-gray-800 hover:bg-gray-50"
      : "bg-blue-600 text-white hover:bg-blue-700 shadow-sm";

  return <button type={type} className={`${base} ${styles} ${className}`} {...props} />;
}
