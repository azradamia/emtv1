
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "EMT Tools",
    template: "%s | EMT Tools",
  },
  description:
    "Emergency Management Team Tools - Central Emergency Fire Service Response",
  applicationName: "EMT Tools",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
