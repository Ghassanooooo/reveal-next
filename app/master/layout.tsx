import { ReactNode } from "react";
import Providers from "@/HOC/Provider";
import "../../lib/fontawesome/css/all.min.css";
import "./globals.scss";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="reveal">
          <div className="slides">
            {" "}
            <Providers>{children} </Providers>
          </div>
        </div>
      </body>
    </html>
  );
}
