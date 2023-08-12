import '../../styles/globals.scss';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Next.js Todo WebApp',
  description: 'Todo App built w/ Next.js Framework',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
