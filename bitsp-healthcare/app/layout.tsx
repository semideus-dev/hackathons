import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";

import { Space_Grotesk } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import { Metadata } from "next";

const appFont = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Next15 : Clerk+Prisma Starter Kit",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={appFont.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
