import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Effects } from "@/components/Effects";
import { Cta, Footer } from "@/components/Footer";
import { IconSprite } from "@/components/Icon";
import { Nav } from "@/components/Nav";

export const metadata: Metadata = {
  title: { default: "Esports Trading", template: "%s · Esports Trading" },
  description:
    "Esports Trading turns financial markets into a competitive team sport. Compete in leagues and PvP tournaments, climb the leaderboard and win prizes.",
};

export const viewport: Viewport = { themeColor: "#0e0e0e" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body id="top">
        <IconSprite />
        <Nav />
        <main>{children}</main>
        <Cta />
        <Footer />
        <Effects />
      </body>
    </html>
  );
}
