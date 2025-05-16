import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({
  subsets: ["latin"]
})

export const metadata = {
  title: "Splitr",
  description: "The smartest way to split expenses with friends",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logos/logo.png" sizes="any" />
      </head>
      <body
        className={`${inter.className}`}
      >
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
