export function Button({ children }: any) {
  return (
    <button style={{ padding: "10px 16px", background: "#2563eb", color: "white", borderRadius: "8px" }}>
      {children}
    </button>
  );
}
