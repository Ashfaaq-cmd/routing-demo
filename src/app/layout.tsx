import React from "react";

export const metadata = {
  title: "Routing Demo",
  description: "A simple Next.js routing demo",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <header style={{ padding: 16, borderBottom: '1px solid #eaeaea' }}>
          <nav style={{ display: 'flex', gap: 12 }}>
            <a href="/" style={{ textDecoration: 'none' }}>Home</a>
            <a href="/about" style={{ textDecoration: 'none' }}>About</a>
            <a href="/blog" style={{ textDecoration: 'none' }}>Blog</a>
          </nav>
        </header>
        <main style={{ padding: 24 }}>{children}</main>
      </body>
    </html>
  );
}
