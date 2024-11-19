import type { Metadata } from "next";
import "./globals.css";
import MenuComponent from "@/app/(components)/menu/HeaderComponent";

export const metadata: Metadata = {
  title: "Movies DB",
  description: "Find awesome movies of all genres here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <MenuComponent/>
        {children}
      </body>
    </html>
  );
}
