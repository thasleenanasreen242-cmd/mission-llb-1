import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mission LLB 1 | Your Law Degree, With a Plan",
  description: "A focused study platform for law students: structured notes, case briefs, revision plans and progress tracking.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}