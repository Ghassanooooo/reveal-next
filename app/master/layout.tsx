import "./globals.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
