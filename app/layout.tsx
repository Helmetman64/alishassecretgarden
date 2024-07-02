// app/layout.tsx

import "./styles/globals.css";
import HamburgerMenu from "./components/Navigation/HamburgerMenu";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body>
        <header className="head">
          <HamburgerMenu />
        </header>
        {children}
      </body>
    </html>
  );
}
