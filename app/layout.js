import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Wenceslaus",
  description: "Expert full-stack web developer with experience in React, Next.js, and blockchain development. View my projects, skills, and insights on modern web technologies.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        // className={`${outfit.className} ${ovo.className} antialiased`}
        className={`${outfit.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
