//import { Link } from 'react-router-dom';

const NavLink = ({ document, children }: any) => (
  <a href={document?.href} className={document?.classes?.join(" ")}>
    {children}
  </a>
);

export default NavLink;
