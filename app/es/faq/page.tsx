import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'Preguntas Frecuentes | Sol & Sage Beauty Studio',description:'Respuestas sobre consultas, preparación, balayage, novias, reservaciones y más.',alternates:{canonical:'/es/faq',languages:{'en-US':'/faq','es-US':'/es/faq'}},openGraph:{url:'/es/faq',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio en Santa Barbara'}],title:'Preguntas Frecuentes | Sol & Sage Beauty Studio',description:'Preguntas frecuentes para la demostración de Sol & Sage Beauty Studio.'}}

const qs = [
  ['Consulta de color','¿Necesito una consulta antes de un servicio de color?','La consulta ayuda a entender tu objetivo, color actual, historial del cabello, rutina y preferencias de mantenimiento antes de conversar sobre un enfoque.'],
  ['Preparación','¿Cómo debo prepararme para mi cita?','Lleva algunas imágenes de referencia y comparte tu rutina, procesos químicos recientes, productos y todo lo que quieras cambiar o conservar.'],
  ['Duración del balayage','¿Cuánto dura una cita de balayage?','El tiempo varía según el largo, densidad, color inicial, historial, dimensión deseada y el plan conversado. La duración exacta se confirmaría antes de una cita real.'],
  ['Mantenimiento del color','¿Cada cuánto debo retocar mi color?','El mantenimiento depende de la técnica, crecimiento natural, acabado deseado, rutina en casa y de cómo quieres que el color evolucione.'],
  ['Servicios para novias','¿Cómo funcionan los servicios para novias y eventos?','El concepto incluye conversación inicial, planeación del look, prueba cuando sea apropiada, coordinación del día y necesidades del cortejo. Este sitio demo no muestra disponibilidad real.'],
  ['Servicios combinados','¿Puedo combinar más de un servicio?','Es posible. Algunos servicios pueden planearse juntos y otros requieren citas separadas. La consulta es el mejor momento para conversar sobre el objetivo completo.'],
  ['Texturas de cabello','¿Trabajan con diferentes texturas de cabello?','El enfoque debe considerar textura, densidad, condición actual, rutina de peinado y el acabado que quieres mantener. Comparte estos detalles durante la consulta.'],
  ['Elegir un servicio','¿Qué hago si no sé qué servicio elegir?','Comienza por el resultado que deseas, no por el nombre técnico. Explora las páginas de servicios y después usa Contacto para describir tu objetivo.'],
  ['Visitas sin cita','¿Aceptan clientes sin cita?','La disponibilidad sin cita no está representada en este website demostrativo. Un estudio real confirmaría directamente su política y disponibilidad actual.'],
  ['Reservación en línea','¿Puedo reservar en línea desde este website?','Todavía no. La página Agendar tiene un espacio visual para un calendario futuro. Esta demo no muestra disponibilidad ni crea una cita.'],
]

export default function FAQEs(){return <main className="faq-page">
  <header className="faq-intro"><p className="eyebrow">PREGUNTAS Y RESPUESTAS</p><h1>Bueno<br/><em>saber.</em></h1><p className="lead">Una cita clara comienza con las preguntas correctas. Estas respuestas demostrativas explican cómo se plantea la futura experiencia del estudio.</p></header>
  <section className="faq-list">{qs.map(([label,q,a],i)=><details key={q}><summary><span className="faq-number">{String(i+1).padStart(2,'0')}</span><span className="faq-question"><small>{label}</small>{q}</span><b>+</b></summary><p>{a}</p></details>)}</section>
  <section className="faq-cta"><h2>¿Todavía no sabes por dónde comenzar?</h2><p>Cuéntanos qué tienes en mente y usa la experiencia de contacto demo para organizar tus preguntas.</p><Link className="button" href="/es/contacto">Contactar al Estudio</Link></section>
</main>}
