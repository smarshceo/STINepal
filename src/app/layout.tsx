import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "STI Nepal – Preventive Healthcare & Lab Test Booking",
  description:
    "STI Nepal is Nepal's trusted preventive healthcare platform. Book lab tests, STI screenings, home sample collection, and health packages online with fast, accurate, and confidential results.",
  keywords:
    "STI Nepal, STI test Nepal, lab test booking Nepal, preventive healthcare Nepal, health screening Nepal, STD test Nepal, home sample collection",
  authors: [{ name: "STI Nepal" }],
  icons: {
    icon: "/asset/icon.png",
    shortcut: "/asset/icon.png",
    apple: "/asset/icon.png",
  },
  openGraph: {
    title: "STI Nepal – Preventive Healthcare & Lab Test Booking",
    description:
      "Book lab tests and STI screenings online. Fast, accurate, confidential results across Nepal.",
    siteName: "STI Nepal",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
