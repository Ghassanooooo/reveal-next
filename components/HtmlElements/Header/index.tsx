const Header = ({ document, children }: any) => (
  <header
    style={document.style}
    id={document?.elementId}
    className={document?.classes?.join(" ")}
  >
    {children}
  </header>
);

export default Header;
