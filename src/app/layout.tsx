import './globals.css'

export const metadata = {
  title: 'Our Wedding',
  description: 'Join us to celebrate our wedding day!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="th">
      <body className="scroll-smooth">{children}</body>
    </html>
  )
}
