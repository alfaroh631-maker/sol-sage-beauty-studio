import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'El Estudio | Sol & Sage Beauty Studio',
  description: 'Descubre la experiencia atenta y personalizada del estudio ficticio Sol & Sage Beauty Studio en Santa Barbara.',
  alternates: { canonical: '/es/about', languages: { 'en-US': '/about', 'es-US': '/es/about' } },
  openGraph: { url: '/es/about', images: [{ url: '/images/gallery-06.webp', width: 1536, height: 1024, alt: 'Una experiencia acogedora en Sol & Sage Beauty Studio' }], title: 'El Estudio | Sol & Sage Beauty Studio', description: 'Un concepto cálido y personalizado de belleza en Santa Barbara.' },
}

export default function AboutEs() {
  return <main className="about-page">
    <section className="about-hero">
      <div className="about-heading">
        <p className="eyebrow">SOBRE SOL & SAGE</p>
        <h1>Belleza que se siente<br/><em>como tuya.</em></h1>
        <p className="lead">Un estudio boutique moderno y ficticio, creado alrededor del estilo personal, la conversación atenta y la calidez de Santa Barbara.</p>
      </div>
      <div className="about-photo">
        <Image src="/images/gallery-06.webp" alt="Clienta disfrutando una experiencia de belleza personalizada" fill priority sizes="(max-width: 800px) 100vw, 52vw"/>
      </div>
    </section>

    <section className="about-story">
      <p className="eyebrow">NUESTRA HISTORIA</p>
      <div>
        <h2>Una manera más tranquila de vivir la belleza.</h2>
        <p>Sol & Sage fue imaginado como un espacio donde la belleza moderna se siente personal, no impuesta. El concepto comienza escuchando: comprendiendo tus referencias, tu rutina y cómo quieres sentirte al salir de la silla.</p>
        <p>Desde el cabello cotidiano hasta color, maquillaje y eventos importantes, cada servicio se plantea como una colaboración. La intención es crear un look pulido, llevable y conectado contigo.</p>
      </div>
    </section>

    <section className="about-values">
      <article><span>01</span><h3>Servicio personalizado</h3><p>Cada cita comienza con tus objetivos, preferencias, historial del cabello y el mantenimiento que sea realista para ti.</p></article>
      <article><span>02</span><h3>Belleza con intención</h3><p>Preferimos decisiones cuidadosas y conversaciones claras, sin tendencias genéricas ni promesas innecesarias.</p></article>
      <article><span>03</span><h3>Una experiencia acogedora</h3><p>El estudio se imagina cálido, tranquilo y accesible: un lugar donde puedes preguntar y tu estilo personal guía el proceso.</p></article>
    </section>

    <section className="about-cta">
      <p className="eyebrow">ENCUENTRA TU PUNTO DE PARTIDA</p>
      <h2>Ven como eres.<br/><em>Crearemos el resto juntos.</em></h2>
      <div className="actions"><Link className="button" href="/es/servicios">Ver servicios</Link><Link className="text-link" href="/es/agendar">Agenda una Cita →</Link></div>
    </section>
  </main>
}
