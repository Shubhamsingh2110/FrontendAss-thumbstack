import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MoneyBack — Shop. Save. Support the Planet",
  description: "Earn cashback on everyday purchases and turn it into positive climate impact.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
