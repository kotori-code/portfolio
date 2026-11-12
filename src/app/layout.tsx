import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { profile } from "@/data/profile";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: profile.name,
    template: `%s | ${profile.name}`,
  },
  description: profile.description.join(""),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ja"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <header className="sticky top-0 z-10 border-b border-line bg-background/90 backdrop-blur">
          <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
            <Link href="/" className="font-bold tracking-tight">
              {profile.name}
            </Link>
            <nav className="flex gap-5 text-sm text-muted">
              <Link href="/#services" className="hover:text-ink">
                できること
              </Link>
              <Link href="/#works" className="hover:text-ink">
                作品
              </Link>
              <Link href="/#contact" className="hover:text-ink">
                連絡先
              </Link>
            </nav>
          </div>
        </header>

        <div className="flex-1">{children}</div>

        <footer className="border-t border-line py-6 text-sm text-muted">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-5">
            <p>© 2026 {profile.name}</p>
            <a
              href={profile.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink"
            >
              GitHub（コードを見る）
            </a>
          </div>
        </footer>
      </body>
    </html>
  );
}
