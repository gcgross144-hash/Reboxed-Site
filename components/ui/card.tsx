export function Card({ children }: any) {
  return <div style={{ border: "1px solid #ddd", borderRadius: "12px", padding: "16px" }}>{children}</div>;
}

export function CardContent({ children }: any) {
  return <div>{children}</div>;
}
