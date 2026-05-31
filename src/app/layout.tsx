import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abdulrahman Talaat | Portfolio",
  description: "Passionate Front-End Developer with a keen eye for UI details. I specialize in crafting responsive, interactive websites using modern technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='50' fill='%23050510'/%3E%3Ctext x='50' y='80' text-anchor='middle' font-size='85' font-weight='900' fill='%2300b7ff' font-family='Arial, sans-serif'%3ET%3C/text%3E%3C/svg%3E" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;700&family=Outfit:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
