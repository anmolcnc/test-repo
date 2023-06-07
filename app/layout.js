import NavBar from './componets/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Roadhouse Group',
  description: 'Welcome to Roadhouse Group',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="relative z-0">
          <NavBar />
          {children}
        </div>
      </body>
    </html>
  );
}
