import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'Reviews | Sol & Sage Beauty Studio',description:'Read sample testimonials created for the Sol & Sage Beauty Studio demonstration.',alternates:{canonical:'/reviews',languages:{'en-US':'/reviews','es-US':'/es/reviews'}},openGraph:{url:'/reviews',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio in Santa Barbara'}],title:'Reviews | Sol & Sage Beauty Studio',description:'Sample testimonials for Sol & Sage Beauty Studio.'}}

const quotes = [
  ['A calm, considered experience from start to finish. I felt heard before we ever discussed the final look.','A personalized studio visit'],
  ['The kind of beauty appointment that feels polished, relaxed, and completely personal.','A haircut and styling visit'],
  ['A thoughtful approach to finding dimension that still felt natural and easy to maintain.','A color consultation'],
  ['An inviting concept for getting ready for a meaningful day without losing your own style.','A special-event visit'],
]

export default function Reviews(){return <main className="reviews-page">
  <header className="reviews-intro"><p className="eyebrow">KIND WORDS</p><h1>Notes from<br/><em>the chair.</em></h1><p className="demo-note">Sample testimonials for demonstration purposes.</p></header>
  <section className="quotes review-grid">{quotes.map(([quote,context],i)=><blockquote key={quote}><span>{String(i+1).padStart(2,'0')}</span>“{quote}”<small>— Sample testimonial · {context}</small></blockquote>)}</section>
  <section className="review-cta"><div><p className="eyebrow">YOUR EXPERIENCE, YOUR WAY</p><h2>Ready to begin the conversation?</h2></div><Link className="button" href="/book">Book an Appointment</Link></section>
</main>}
