import "./globals.scss";
import Providers from "../util/providers";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="reveal">
            <div className="slides">{children}</div>
          </div>
        </Providers>
      </body>
    </html>
  );
}
