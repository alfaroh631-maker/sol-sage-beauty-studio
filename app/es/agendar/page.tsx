import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agenda una Cita | Sol & Sage Beauty Studio',
  description: 'Explora la demostración de citas de Sol & Sage Beauty Studio en Santa Barbara, California.',
  alternates: { canonical: '/es/agendar', languages: { 'en-US': '/book', 'es-US': '/es/agendar' } },
  openGraph: {url:'/es/agendar',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio in Santa Barbara'}], title: 'Agenda una Cita | Sol & Sage Beauty Studio', description: 'Demostración de citas de Sol & Sage Beauty Studio en Santa Barbara.' },
}

export default function Agendar(){return <main className="inner"><p className="eyebrow">SOL & SAGE · CITAS</p><h1>Agenda una<br/><em>cita.</em></h1><p className="lead">Esta es una sección demostrativa para el estudio ficticio Sol & Sage. El calendario real se conectará en una fase futura.</p><section className="booking-panel"><span className="eyebrow">SECCIÓN DEMO</span><h2>Comienza con una conversación.</h2><p>En esta versión no hay un sistema de reservaciones conectado y no se crea ninguna cita. Explora los servicios o contacta al estudio con los datos de demostración.</p><div className="actions"><Link className="button" href="/es/servicios">Ver servicios</Link><Link className="text-link" href="/es/contacto">Contactar al estudio →</Link></div></section></main>}
