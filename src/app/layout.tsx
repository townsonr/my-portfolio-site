import '@/app/globals.css';

export const metadata = {
  title: 'Rachel Townson',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" /> 
      </head>
      <body>{children}</body>
    </html>
  )
}
