import './globals.css'
import type { Metadata } from 'next'
import SiteChrome from './components/SiteChrome'

export const metadata: Metadata = { title: 'Sol & Sage Beauty Studio | Santa Barbara', description: 'Modern hair and beauty services in Santa Barbara, California.', metadataBase: new URL('https://sol-sage-beauty-studio.vercel.app'), alternates: { canonical: '/', languages: { 'en-US': '/', 'es-US': '/es' } }, openGraph: { title: 'Sol & Sage Beauty Studio', description: 'Modern hair and beauty services in Santa Barbara, California.', type: 'website', url: '/', images: [{ url: '/images/hero.webp', width: 1536, height: 1024, alt: 'Sol & Sage Beauty Studio in Santa Barbara' }] }, twitter: { card: 'summary_large_image', images: ['/images/hero.webp'] } }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const schema = { '@context':'https://schema.org', '@type':'BeautySalon', name:'Sol & Sage Beauty Studio', description:'Modern hair and beauty services in Santa Barbara, California.', url:'https://sol-sage-beauty-studio.vercel.app', telephone:'+1-805-555-0174', email:'hello@solandsagebeauty.com', address:{'@type':'PostalAddress', addressLocality:'Santa Barbara', addressRegion:'CA', addressCountry:'US'}, areaServed:'Santa Barbara, California' }
  return <html lang="en"><body><SiteChrome>{children}</SiteChrome><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}} /></body></html>
}
