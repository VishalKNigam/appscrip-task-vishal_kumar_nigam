import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppScriptContextProvider } from "../context/appscriptContext";
import Header from "../components/header";
import Footer from "../components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AppScript Task by Sravan Kumar Samala",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppScriptContextProvider>
          <div className="app-container">
            <Header />
            {children}
          </div>
          <Footer />
        </AppScriptContextProvider>
      </body>
    </html>
  );
}
