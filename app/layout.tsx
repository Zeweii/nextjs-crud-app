/* eslint-disable @next/next/no-head-element */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
        <body>
            <main>
                <nav>
                    <Link href="/">
                        Home
                    </Link>
                    <Link href="/notes">
                        Notes
                    </Link>
                </nav>
            </main>
        </body>
    </html>
  );
}
