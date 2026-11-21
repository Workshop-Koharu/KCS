import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "KCS — Koharu Coding Server 공식 포털",
  description: "차세대 소프트웨어와 디스코드 서비스를 개발하는 Koharu Coding Server 공식 생태계 포털",
  icons: {
    icon: "/assets/kcs.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="dark">
      <body className="min-h-screen bg-[#08090d] text-[#dbdee1] antialiased selection:bg-indigo-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
