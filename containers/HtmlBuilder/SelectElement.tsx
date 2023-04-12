import Division from "../../components/HtmlElements/Division";
import Navbar from "../../components/HtmlElements/Navbar";
//import Link from './Link';
import Span from "../../components/HtmlElements/Span";
import Header from "../../components/HtmlElements/Header";
import Main from "../../components/HtmlElements/Main";
import Footer from "../../components/HtmlElements/Foorter";

function SelectElement({ document, children }: any) {
  switch (document?.element) {
    case "footer":
      return <Footer document={document}>{children}</Footer>;
    case "main":
      return <Main document={document}>{children}</Main>;
    case "header":
      return <Header document={document}>{children}</Header>;
    case "nav":
      return <Navbar document={document}>{children}</Navbar>;
    case "span":
      return <Span document={document}>{children}</Span>;
    case "div":
      return <Division document={document}>{children}</Division>;

    default:
      return <Division document={document}>{children}</Division>;
  }
}
export default SelectElement;
