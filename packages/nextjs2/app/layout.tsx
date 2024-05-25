import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import Script from 'next/script';
import { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import { LearnMore } from './components/learn-more';
import { Footer } from './components/footer';

import { Inter as FontSans } from "next/font/google"
import { cn } from "@/lib/utils"



export const metadata: Metadata = {
  metadataBase: new URL('https://clerk-next-app.vercel.app/'),
  title: 'Next.js Clerk Template',
  description: 'A simple and powerful Next.js template featuring authentication and user management powered by Clerk.',
  openGraph: { images: ['/og.png'] },
};
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
export default function RootLayout({ children }: { children: React.ReactNode } ) {
 
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
      <ClerkProvider
        appearance={{
          variables: { colorPrimary: '#000000' },
          elements: {
            formButtonPrimary: 'bg-black border border-black border-solid hover:bg-white hover:text-black',
            socialButtonsBlockButton:
              'bg-white border-gray-200 hover:bg-transparent hover:border-black text-gray-600 hover:text-black',
            socialButtonsBlockButtonText: 'font-semibold',
            formButtonReset:
              'bg-white border border-solid border-gray-200 hover:bg-transparent hover:border-black text-gray-500 hover:text-black',
            membersPageInviteButton: 'bg-black border border-black border-solid hover:bg-white hover:text-black',
            card: 'bg-[#fafafa]',
          },
        }}
      >
        <body className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          fontSans.variable
        )}>{children}</body>
      </ClerkProvider>

      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/components/prism-core.min.js" />
      <Script src="https://cdn.jsdelivr.net/npm/prismjs@1/plugins/autoloader/prism-autoloader.min.js" />
    </html>
  );
}