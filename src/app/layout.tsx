import type { Metadata } from "next";
import { Unbounded,Roboto, Josefin_Sans } from 'next/font/google';

import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});
const josefin = Josefin_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '700'],
  style: ['normal', 'italic'],
  variable: '--font-roboto',
});

export const metadata: Metadata = {
  title: "my login page",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${josefin.variable} ${roboto.variable}  antialiased text-foreground`}>
        {children}
      </body>
    </html>
  );
}
