import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'Opiniones | Sol & Sage Beauty Studio',description:'Lee opiniones de muestra creadas para la demostración de Sol & Sage Beauty Studio.',alternates:{canonical:'/es/reviews',languages:{'en-US':'/reviews','es-US':'/es/reviews'}},openGraph:{url:'/es/reviews',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio en Santa Barbara'}],title:'Opiniones | Sol & Sage Beauty Studio',description:'Opiniones de muestra para Sol & Sage Beauty Studio.'}}

const quotes = [
  ['Una experiencia tranquila y pensada de principio a fin. Me sentí escuchada antes de hablar del look final.','Una visita personalizada al estudio'],
  ['El tipo de cita de belleza que se siente pulida, relajada y completamente personal.','Una cita de corte y peinado'],
  ['Un enfoque cuidadoso para encontrar dimensión que se sintiera natural y fácil de mantener.','Una consulta de color'],
  ['Un concepto acogedor para prepararte para un día importante sin perder tu propio estilo.','Una cita para evento especial'],
]

export default function ReviewsEs(){return <main className="reviews-page">
  <header className="reviews-intro"><p className="eyebrow">PALABRAS AMABLES</p><h1>Notas desde<br/><em>la silla.</em></h1><p className="demo-note">Testimonios de muestra creados únicamente para demostración.</p></header>
  <section className="quotes review-grid">{quotes.map(([quote,context],i)=><blockquote key={quote}><span>{String(i+1).padStart(2,'0')}</span>“{quote}”<small>— Testimonio de muestra · {context}</small></blockquote>)}</section>
  <section className="review-cta"><div><p className="eyebrow">TU EXPERIENCIA, A TU MANERA</p><h2>¿Lista para comenzar la conversación?</h2></div><Link className="button" href="/es/agendar">Agenda una Cita</Link></section>
</main>}
