export function Select({ children }: any) {
  return <div>{children}</div>;
}
export function SelectTrigger({ children }: any) {
  return <div>{children}</div>;
}
export function SelectValue({ placeholder }: any) {
  return <span>{placeholder}</span>;
}
export function SelectContent({ children }: any) {
  return <select>{children}</select>;
}
export function SelectItem({ value, children }: any) {
  return <option value={value}>{children}</option>;
}
