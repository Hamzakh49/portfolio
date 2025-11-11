import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hamza Kharchi — Front-End & Full-Stack Developer",
  description:
    "Professional portfolio of Hamza Kharchi, Front-End & Full-Stack Developer specialized in React, Next.js, Node.js, and TypeScript.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-gray-900 to-gray-950 text-white antialiased">
        {children}
      </body>
    </html>
  );
}
