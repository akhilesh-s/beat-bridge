import "~/bb/styles/globals.css";

import { GeistSans } from "geist/font/sans";

export const metadata = {
  title: "Beat Bridge",
  description: "Beat Bridge",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
