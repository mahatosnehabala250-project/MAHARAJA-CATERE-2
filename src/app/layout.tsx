import type { Metadata } from "next";
import { Playfair_Display, Cormorant_Garamond, Lato } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maharaja Caterer Purulia | Premium Catering & Event Services",
  description:
    "Maharaja Caterer - Purulia's finest catering and event planning service. Specializing in weddings, birthdays, receptions, and family functions. Bengali, Indian, Chinese & Tandoori cuisine. Rated 4.8/5 stars.",
  keywords: [
    "Maharaja Caterer",
    "Catering Purulia",
    "Wedding Caterer Purulia",
    "Event Planner Purulia",
    "Bengali Catering",
    "Indian Catering",
    "Tandoori",
    "Purulia West Bengal",
    "Birthday Party Catering",
    "Reception Catering",
  ],
  authors: [{ name: "Maharaja Caterer" }],
  icons: {
    icon: "/images/logo.jpg",
  },
  openGraph: {
    title: "Maharaja Caterer Purulia | Premium Catering & Event Services",
    description:
      "Purulia's finest catering service. Weddings, Birthdays, Receptions & more. Bengali, Indian, Chinese & Tandoori cuisine.",
    siteName: "Maharaja Caterer",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maharaja Caterer Purulia | Premium Catering & Event Services",
    description:
      "Purulia's finest catering service. Weddings, Birthdays, Receptions & more.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${playfair.variable} ${cormorant.variable} ${lato.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
