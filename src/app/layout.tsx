import '../../styles/globals.scss';
import type { Metadata } from 'next';
import OffcanvasNavbar from './components/offcanvasNavbar';
import Footer from './components/footer';

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
        <main>
          <OffcanvasNavbar />
          <div className="container">
            <div className="m-3">
              {children}
            </div>
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
