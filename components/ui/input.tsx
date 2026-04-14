import * as React from "react";

export function Input({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={`w-full rounded-2xl border border-gray-300 bg-white px-4 py-3 text-base text-gray-900 outline-none transition focus:border-blue-400 focus:ring-2 focus:ring-blue-200 ${className}`}
      {...props}
    />
  );
}
