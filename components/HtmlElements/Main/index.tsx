const Main = ({ document, children }: any) => (
  <main
    style={document.style}
    id={document?.elementId}
    className={document?.classes?.join(" ")}
  >
    {children}
  </main>
);

export default Main;
