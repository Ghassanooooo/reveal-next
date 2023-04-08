import "./globals.scss";
import "../../lib/fontawesome/css/all.min.css";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="reveal">
          <div className="slides">{children}</div>
        </div>
      </body>
    </html>
  );
}
