import React from "react";

const Navbar = ({ document, children }: any) => (
  <nav
    style={document.style}
    id={document?.elementId}
    className={document?.classes?.join(" ")}
  >
    {children}
  </nav>
);

export default Navbar;
