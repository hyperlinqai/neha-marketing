import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'WorX With Neha - Performance Marketing Specialist',
  description: 'Performance marketing specialist helping businesses achieve measurable growth through data-driven strategies. Expert in Google Ads, Meta Ads, and marketing automation.',
  keywords: 'performance marketing, digital marketing, Google Ads, Meta Ads, marketing automation, ROI optimization, lead generation',
  authors: [{ name: 'Neha', url: 'https://worxwithneha.com' }],
  creator: 'WorX With Neha',
  publisher: 'WorX With Neha',
  openGraph: {
    title: 'WorX With Neha - Performance Marketing Specialist',
    description: 'Performance marketing specialist helping businesses achieve measurable growth through data-driven strategies.',
    url: 'https://worxwithneha.com',
    siteName: 'WorX With Neha',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WorX With Neha - Performance Marketing Specialist',
    description: 'Performance marketing specialist helping businesses achieve measurable growth through data-driven strategies.',
    creator: '@worxwithneha',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  )
}
