import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About the Studio | Sol & Sage Beauty Studio',
  description: 'Discover the thoughtful, personalized studio experience behind the fictional Sol & Sage Beauty Studio in Santa Barbara.',
  alternates: { canonical: '/about', languages: { 'en-US': '/about', 'es-US': '/es/about' } },
  openGraph: { url: '/about', images: [{ url: '/images/gallery-06.webp', width: 1536, height: 1024, alt: 'A welcoming beauty studio experience at Sol & Sage' }], title: 'About the Studio | Sol & Sage Beauty Studio', description: 'A warm, personalized beauty studio concept in Santa Barbara.' },
}

export default function About() {
  return <main className="about-page">
    <section className="about-hero">
      <div className="about-heading">
        <p className="eyebrow">ABOUT SOL & SAGE</p>
        <h1>Beauty that feels<br/><em>like your own.</em></h1>
        <p className="lead">A fictional modern boutique studio shaped around personal style, thoughtful conversation, and a warm Santa Barbara point of view.</p>
      </div>
      <div className="about-photo">
        <Image src="/images/gallery-06.webp" alt="Client enjoying a personalized beauty studio experience" fill priority sizes="(max-width: 800px) 100vw, 52vw"/>
      </div>
    </section>

    <section className="about-story">
      <p className="eyebrow">OUR STORY</p>
      <div>
        <h2>A calmer way to approach beauty.</h2>
        <p>Sol & Sage was imagined as a place where modern beauty feels personal rather than prescribed. The studio concept begins with listening—understanding your references, your routine, and how you want to feel when you leave the chair.</p>
        <p>From everyday hair to color, makeup, and meaningful events, each service is approached as a collaboration. The goal is a look that feels polished, wearable, and connected to you.</p>
      </div>
    </section>

    <section className="about-values">
      <article><span>01</span><h3>Personalized service</h3><p>Every appointment begins with your goals, preferences, hair history, and the level of maintenance that feels realistic for you.</p></article>
      <article><span>02</span><h3>Thoughtful beauty</h3><p>We favor considered choices and clear conversations over one-size-fits-all trends or unnecessary promises.</p></article>
      <article><span>03</span><h3>A welcoming experience</h3><p>The studio is envisioned as warm, calm, and approachable—a place where questions are encouraged and personal style leads.</p></article>
    </section>

    <section className="about-cta">
      <p className="eyebrow">FIND YOUR STARTING POINT</p>
      <h2>Come as you are.<br/><em>We’ll shape the rest together.</em></h2>
      <div className="actions"><Link className="button" href="/services">Explore Services</Link><Link className="text-link" href="/book">Book an Appointment →</Link></div>
    </section>
  </main>
}
