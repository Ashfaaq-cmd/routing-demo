export const metadata = {
  title: 'Routing Demo',
  description: 'A demo for Next.js routing',
};
export default function RootLayout({ children ,}: {
    children: React.ReactNode;
} ) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}