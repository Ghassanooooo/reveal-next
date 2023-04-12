const Division = ({ document, children }: any) => (
  <div
    style={document.style}
    id={document?.elementId}
    className={document?.classes?.join(" ")}
  >
    {children}
  </div>
);

export default Division;
