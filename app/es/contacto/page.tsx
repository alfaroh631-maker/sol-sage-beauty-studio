import type { Metadata } from 'next'

export const metadata: Metadata={title:'Contacto | Sol & Sage Beauty Studio',description:'Contacta al estudio ficticio Sol & Sage mediante un formulario claramente identificado como demostración.',alternates:{canonical:'/es/contacto',languages:{'en-US':'/contact','es-US':'/es/contacto'}},openGraph:{url:'/es/contacto',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio en Santa Barbara'}],title:'Contacto | Sol & Sage Beauty Studio',description:'Página de contacto demostrativa de Sol & Sage Beauty Studio.'}}

const services=['Cortes y peinados','Coloración del cabello','Luces y balayage','Secado y peinado','Tratamientos capilares','Novias y eventos especiales','Maquillaje','Todavía no lo sé']

export default function Contacto(){return <main className="contact-page">
  <header className="contact-intro"><p className="eyebrow">HABLEMOS</p><h1>Cuéntanos qué<br/><em>tienes en mente.</em></h1><p className="lead">Comparte el servicio que te interesa, tu fecha preferida y cualquier pregunta. Este formulario es una demostración visual hasta que el sitio se conecte con un sistema real.</p><div className="contact-details"><div><span>TELÉFONO</span><a href="tel:+18055550174">(805) 555-0174</a></div><div><span>CORREO</span><a href="mailto:hello@solandsagebeauty.com">hello@solandsagebeauty.com</a></div><div><span>UBICACIÓN</span><p>Santa Barbara, California</p></div></div></header>
  <section className="contact-form-wrap">
    <div className="demo-banner"><span>FORMULARIO DE DEMOSTRACIÓN</span><p>La información escrita aquí no se enviará, guardará ni utilizará para crear una cita.</p></div>
    <form className="demo-form">
      <div className="field"><label htmlFor="name-es">Nombre completo</label><input id="name-es" name="name" autoComplete="name" required/></div>
      <div className="field"><label htmlFor="phone-es">Teléfono</label><input id="phone-es" name="phone" type="tel" autoComplete="tel"/></div>
      <div className="field"><label htmlFor="email-es">Correo electrónico</label><input id="email-es" name="email" type="email" autoComplete="email" required/></div>
      <div className="field"><label htmlFor="service-es">Servicio de interés</label><select id="service-es" name="service" defaultValue=""><option value="" disabled>Selecciona un servicio</option>{services.map(s=><option key={s}>{s}</option>)}</select></div>
      <div className="field"><label htmlFor="date-es">Fecha preferida</label><input id="date-es" name="date" type="date"/></div>
      <div className="field field-wide"><label htmlFor="message-es">Mensaje</label><textarea id="message-es" name="message" rows={5} placeholder="Cuéntanos sobre tus objetivos, preguntas u ocasión."/></div>
      <input type="hidden" name="preferred-language" value="Spanish"/>
      <button className="button" type="button" aria-disabled="true">Demostración — No se enviará nada</button>
    </form>
  </section>
</main>}
