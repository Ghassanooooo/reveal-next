const Span = ({ document, children }: any) => (
  <span
    style={document.style}
    id={document?.elementId}
    className={document?.classes?.join(" ")}
  >
    {children}
  </span>
);

export default Span;
