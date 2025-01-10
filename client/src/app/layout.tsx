import type { Metadata } from "next";
import "./globals.css";
import DashboardWrapper from "./dashboardWraper";

export const metadata: Metadata = {
  title: "PlanWise",
  description: "The Ultimate Project Management Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <DashboardWrapper>{children}</DashboardWrapper>
      </body>
    </html>
  );
}
