import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book an Appointment | Sol & Sage Beauty Studio',
  description: 'Explore the Sol & Sage Beauty Studio appointment demo for Santa Barbara, California.',
  alternates: { canonical: '/book', languages: { 'en-US': '/book', 'es-US': '/es/agendar' } },
  openGraph: {url:'/book',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio in Santa Barbara'}], title: 'Book an Appointment | Sol & Sage Beauty Studio', description: 'Appointment demo for Sol & Sage Beauty Studio in Santa Barbara.' },
}

export default function Book(){return <main className="inner"><p className="eyebrow">SOL & SAGE · APPOINTMENTS</p><h1>Book an<br/><em>Appointment.</em></h1><p className="lead">This is a demonstration booking section for the fictional Sol & Sage Beauty Studio. A live calendar will be connected in a later phase.</p><section className="booking-panel"><span className="eyebrow">DEMO SECTION</span><h2>Start with a conversation.</h2><p>For this version, no booking system is connected and no appointment is created. Explore the services or contact the studio using the demo details below.</p><div className="actions"><Link className="button" href="/services">Explore Services</Link><Link className="text-link" href="/contact">Contact the Studio →</Link></div></section></main>}
