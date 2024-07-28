import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/NavBar";
import Footer from "./components/footer/Footer";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "800"] });

export const metadata: Metadata = {
  title: "New Rk jewellers",
  description: "Gold and silver based jewellery shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
