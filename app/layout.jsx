import './globals.css';

export const metadata = {
  title: 'ACOPLE - Premium Listening Bar in Buenos Aires',
  description: 'Experience ACOPLE, a premium cocktail bar in Buenos Aires. Curated music, exceptional cocktails, and cultural moments.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body style={{ backgroundColor: '#0f0f0f', color: '#f5f1ed' }}>
        {children}
      </body>
    </html>
  );
}
