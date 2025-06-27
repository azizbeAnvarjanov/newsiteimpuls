import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { Toaster } from "react-hot-toast";
import Footer from "../(customComponents)/Footer";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Impuls Tibbiyot Instituti",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<RootLayoutProps>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <head>
        <script
          defer
          data-domain="impulsmi.uz"
          src="https://plausible.io/js/script.hash.pageview-props.tagged-events.js"
        ></script>
      </head>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div>
            <Toaster position="top-center" reverseOrder={false} />
            <Header />
            <div className="pt-[17vh]">{children}</div>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
