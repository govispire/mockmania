
import { Providers } from "./providers";
import "./globals.css";
import { TempoInit } from "./tempo-init";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moct Platform",
  description: "A comprehensive platform for exam preparation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Script 
          src="https://api.tempolabs.ai/proxy-asset?url=https://storage.googleapis.com/tempo-public-assets/error-handling.js"
          strategy="lazyOnload"
        />
        <Providers>
          <TempoInit />
          {children}
        </Providers>
      </body>
    </html>
  );
}
