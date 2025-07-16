import './globals.css'

export const metadata = {
  title: 'My Next.js App',
  description: 'Learning Next.js with Copilot',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <nav className="bg-blue-600 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">My Next.js App</h1>
            <div className="space-x-4">
              <a href="/" className="hover:text-blue-200">Home</a>
              <a href="/about" className="hover:text-blue-200">About</a>
              <a href="/projects" className="hover:text-blue-200">Projects</a>
              <a href="/contact" className="hover:text-blue-200">Contact Us</a>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}