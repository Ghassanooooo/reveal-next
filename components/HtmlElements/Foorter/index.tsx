const Footer = ({ document, children }: any) => (
  <footer
    style={document.style}
    id={document?.elementId}
    className={document?.classes?.join(" ")}
  >
    {children}
  </footer>
);

export default Footer;
