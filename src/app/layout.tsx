import { Provider as JotaiProvider } from 'jotai';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import { ThemeProvider } from 'src/components/Layout/ThemeProvider';
import WagmiProvider from 'src/components/Layout/WagmiProviders';
import {
  KEYWORD,
  SITE_DESCRIPTION,
  SITE_ICON_SRC,
  SITE_THUMBNAIL_HEIGHT,
  SITE_THUMBNAIL_SRC,
  SITE_TITLE,
  SITE_URL,
} from 'src/constant/metadata';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: KEYWORD,
  publisher: 'A-Star Group',
  icons: SITE_URL + SITE_ICON_SRC,
  robots: {
    follow: true,
    index: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_TITLE,
    countryName: 'Vietnam',
    images: {
      url: SITE_URL + SITE_THUMBNAIL_SRC,
      secureUrl: SITE_THUMBNAIL_SRC,
      type: 'image/png',
      width: SITE_THUMBNAIL_HEIGHT,
      height: SITE_THUMBNAIL_HEIGHT,
    },
  },
  twitter: {
    card: 'summary_large_image',
    site: '@site',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: {
      url: SITE_URL + SITE_THUMBNAIL_SRC,
      secureUrl: SITE_THUMBNAIL_SRC,
      type: 'image/png',
      width: SITE_THUMBNAIL_HEIGHT,
      height: SITE_THUMBNAIL_HEIGHT,
    },
  },
  appleWebApp: {
    capable: true,
    title: 'A-Star Group',
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <JotaiProvider>
          <WagmiProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </WagmiProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
