import type { Metadata } from "next";
import "../styles/globals.css";
import { ThemeProvider } from "../providers/ThemeProvider";

export const metadata: Metadata = {
  title: "My Next.js 15 App",
  description: "Starter project structure",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <header className="p-4 bg-blue-600 text-white">My Next App</header>
          <main className="p-6">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
