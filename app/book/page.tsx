import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'Book an Appointment | Sol & Sage Beauty Studio',description:'Explore the appointment-booking demo for the fictional Sol & Sage Beauty Studio in Santa Barbara.',alternates:{canonical:'/book',languages:{'en-US':'/book','es-US':'/es/agendar'}},openGraph:{url:'/book',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio in Santa Barbara'}],title:'Book an Appointment | Sol & Sage Beauty Studio',description:'Appointment demo for Sol & Sage Beauty Studio in Santa Barbara.'}}

export default function Book(){return <main className="book-page">
  <header className="book-intro"><div><p className="eyebrow">SOL & SAGE · APPOINTMENTS</p><h1>Book an<br/><em>Appointment.</em></h1></div><p className="lead">Choose a future appointment time here once the live calendar is connected. For now, explore how the booking experience will be presented.</p></header>
  <section className="calendar-demo" aria-label="Calendar demonstration placeholder">
    <div className="calendar-demo-head"><div><span className="demo-pill">DEMO</span><p>CALENDAR PLACEHOLDER</p></div><span>Live scheduling coming in a future phase</span></div>
    <div className="calendar-preview" aria-hidden="true"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
    <div className="calendar-message"><p className="eyebrow">BOOKING IS NOT CONNECTED</p><h2>Your appointment starts with the right fit.</h2><p>This fictional website does not show live availability or create appointments. A scheduling calendar can be placed in this prepared area when the next integration phase begins.</p></div>
  </section>
  <section className="book-alternative"><div><p className="eyebrow">PREFER TO START WITH A QUESTION?</p><h2>Contact is always an option.</h2><p>Use the demonstration contact form to share the service you are considering, your preferred date, and anything you would like the studio to know.</p></div><Link className="button" href="/contact">Contact the Studio</Link></section>
</main>}
