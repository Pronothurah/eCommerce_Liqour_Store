import type { Metadata } from "next";
import { Inter, Reem_Kufi } from "next/font/google";
import "./globals.css";
import { Footer, Header } from "@/components";
import SessionProvider from "@/utils/SessionProvider";
import Providers from "@/Providers";
import { getServerSession } from "next-auth";
import 'svgmap/dist/svgMap.min.css';



const inter = Inter({ subsets: ["latin"] });
const reemKufi = Reem_Kufi({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "ROH & Barrels",
  description: "ROH & Barrels has a wide selection of wines, gins, vodkas, rums, tequila, liqueurs and other drinks to choose from.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const session = await getServerSession();
  return (
    <html lang="en" data-theme="light">
      <head>
      </head>
      <body className={`${inter.className} ${reemKufi.className}`} >
      <SessionProvider session={session}>
        <Header />
        <Providers>
        {children}
        </Providers>
        <Footer />
      </SessionProvider>
        </body>
    </html>
  );
}
