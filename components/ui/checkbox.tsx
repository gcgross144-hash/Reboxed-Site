import * as React from "react";

type CheckboxProps = {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  disabled?: boolean;
  id?: string;
};

export function Checkbox({
  checked = false,
  onCheckedChange,
  disabled = false,
  id,
}: CheckboxProps) {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-2 focus:ring-blue-300"
    />
  );
}
