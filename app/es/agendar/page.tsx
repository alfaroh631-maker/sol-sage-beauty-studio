import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'Agenda una Cita | Sol & Sage Beauty Studio',description:'Explora la demostración de citas de Sol & Sage Beauty Studio en Santa Barbara, California.',alternates:{canonical:'/es/agendar',languages:{'en-US':'/book','es-US':'/es/agendar'}},openGraph:{url:'/es/agendar',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio en Santa Barbara'}],title:'Agenda una Cita | Sol & Sage Beauty Studio',description:'Demostración de citas de Sol & Sage Beauty Studio en Santa Barbara.'}}

export default function Agendar(){return <main className="book-page">
  <header className="book-intro"><div><p className="eyebrow">SOL & SAGE · CITAS</p><h1>Agenda una<br/><em>cita.</em></h1></div><p className="lead">Cuando el calendario real esté conectado, aquí podrás elegir el horario que más te convenga. Por ahora, esta página muestra cómo funcionará el proceso.</p></header>
  <section className="calendar-demo" aria-label="Espacio demostrativo para calendario">
    <div className="calendar-demo-head"><div><span className="demo-pill">DEMOSTRACIÓN</span><p>ESPACIO PARA EL CALENDARIO</p></div><span>Las citas en línea se conectarán en una fase futura</span></div>
    <div className="calendar-preview" aria-hidden="true"><div><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div><div><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b><b></b></div></div>
    <div className="calendar-message"><p className="eyebrow">EL CALENDARIO AÚN NO ESTÁ CONECTADO</p><h2>Tu cita comienza con el servicio adecuado.</h2><p>Este sitio web ficticio no muestra disponibilidad real ni crea citas. Cuando comience la siguiente fase de integración, el calendario podrá conectarse en esta área preparada.</p></div>
  </section>
  <section className="book-alternative"><div><p className="eyebrow">¿PREFIERES COMENZAR CON UNA PREGUNTA?</p><h2>También puedes contactarnos.</h2><p>Usa el formulario de demostración para compartir el servicio que te interesa, tu fecha preferida y cualquier detalle que quieras comunicar al estudio.</p></div><Link className="button" href="/es/contacto">Contacta al estudio</Link></section>
</main>}
