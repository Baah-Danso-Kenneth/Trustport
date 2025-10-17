import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local'

import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/providers/ThemeProvider";

const outift = localFont({
  src: '../../public/fonts/Outfit.ttf',
  variable: '--font-outfit'
})


const poppins = localFont({
  src: '../../public/fonts/Poppins.ttf',
  variable: '--font-poppins'
})

const poltwaski = localFont({
  src: '../../public/fonts/Poltwaski.ttf',
  variable: '--font-poltwaski'
})



export const metadata: Metadata = {
  title: "KINETIC",
  description: "Empowering global trade with Bitcoin-secured, decentralized payment rails built on Stacks.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${poppins.variable} ${poltwaski.variable} ${outift.variable} antialiased`}

      >
        <ThemeProvider>
          <div>
            <Toaster />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}