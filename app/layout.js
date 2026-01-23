import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import QueryProvider from "@/components/QueryProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://jahan-d.web.app"),
  title: "Jahan Ebna Delower | Junior Frontend Developer",
  description: "Portfolio of a high-performance MERN developer specializing in scalable web applications, React 19, and Next.js 15.",
  openGraph: {
    title: "Jahan Ebna Delower | Junior Frontend Developer",
    description: "Building high-performance, scalable web experiences with modern React 19 and Next.js 15.",
    url: "https://jahan-d.web.app",
    siteName: "Jahan's Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 800,
        height: 600,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jahan Ebna Delower | Junior Frontend Developer",
    description: "Building high-performance web experiences with React 19 and Next.js 15.",
    images: ["/images/profile.jpg"],
  },
  icons: {
    icon: "/icon.png",
    apple: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="drake">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}
      >
        <QueryProvider>
          {children}
        </QueryProvider>
      </body>
    </html>
  );
}
