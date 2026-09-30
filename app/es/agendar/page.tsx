import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'Agenda una Cita | Sol & Sage Beauty Studio',description:'Explora la demostración de citas de Sol & Sage Beauty Studio en Santa Barbara, California.',alternates:{canonical:'/es/agendar',languages:{'en-US':'/book','es-US':'/es/agendar'}},openGraph:{url:'/es/agendar',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio en Santa Barbara'}],title:'Agenda una Cita | Sol & Sage Beauty Studio',description:'Demostración de citas de Sol & Sage Beauty Studio en Santa Barbara.'}}

export default function Agendar(){return <main className="book-page">
  <header className="book-intro"><div><p className="eyebrow">SOL & SAGE · CITAS</p><h1>Agenda una<br/><em>cita.</em></h1></div><p className="lead">Elige aquí un horario futuro cuando el calendario real esté conectado. Por ahora, explora cómo se presentará la experiencia de reservación.</p></header>
  <section className="calendar-demo" aria-label="Espacio demostrativo para calendario">
    <div className="calendar-demo-head"><div><span className="demo-pill">DEMO</span><p>ESPACIO PARA CALENDARIO</p></div><span>La reservación real llegará en una fase futura</span></div>
    <div className="calendar-preview" aria-hidden="true"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
    <div className="calendar-message"><p className="eyebrow">LA RESERVACIÓN NO ESTÁ CONECTADA</p><h2>Tu cita comienza con el servicio indicado.</h2><p>Este website ficticio no muestra disponibilidad real ni crea citas. Cuando comience la siguiente fase de integración, se podrá colocar un calendario en esta área preparada.</p></div>
  </section>
  <section className="book-alternative"><div><p className="eyebrow">¿PREFIERES COMENZAR CON UNA PREGUNTA?</p><h2>Contacto siempre es una opción.</h2><p>Usa el formulario demostrativo para compartir el servicio que consideras, tu fecha preferida y cualquier detalle que quieras comunicar al estudio.</p></div><Link className="button" href="/es/contacto">Contactar al Estudio</Link></section>
</main>}
