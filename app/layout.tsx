import "./globals.css";
import Navbar from "./components/Navbar";
import ProfilePic from "./components/ProfilePic";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Moses' Blog",
  description: "Created by Moses Fawole",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <ProfilePic />
        {children}
      </body>
    </html>
  );
}
