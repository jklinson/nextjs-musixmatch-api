import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Navbar from "@/components/Navbar";
import Providers from "@/Providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextJS MusixMatch",
  description: "NextJS MusixMatch API explorer.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className="flex flex-col">
        <SessionProvider session={session}>
          <div className="flex flex-col min-h-screen gap-2 bg-gradient-to-r from-cyan-500 to-blue-500">
            <Navbar />
            <Providers>
              {children}
            </Providers>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
