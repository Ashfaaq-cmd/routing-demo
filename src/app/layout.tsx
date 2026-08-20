export const metadata = {
  title: 'Routing Demo',
  description: 'A demo for Next.js routing',
};
export default function RootLayout({ children ,}: {
    children: React.ReactNode;
} ) {
    return (
        <html lang="en">
            <body>
                <header style={{
                    backgroundColor: "lightblue",
                    padding:"1rem",
                }}>
                    <p>Header</p>
                </header>
                {children}
                
                <footer style={{
                    backgroundColor: "lightgray",
                    padding:"1rem",
                }}>
                    <p>Footer</p>
                </footer>
                </body>
        </html>
    )
}