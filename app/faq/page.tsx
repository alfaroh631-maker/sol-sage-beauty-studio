import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata={title:'FAQ | Sol & Sage Beauty Studio',description:'Answers about consultations, appointment preparation, balayage, bridal services, booking, and more.',alternates:{canonical:'/faq',languages:{'en-US':'/faq','es-US':'/es/faq'}},openGraph:{url:'/faq',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio in Santa Barbara'}],title:'FAQ | Sol & Sage Beauty Studio',description:'Frequently asked questions for the Sol & Sage Beauty Studio demonstration.'}}

const qs = [
  ['Color consultation','Do I need a consultation before a color service?','A consultation helps us understand your goal, current color, hair history, routine, and maintenance preferences before discussing an approach.'],
  ['Appointment preparation','How should I prepare for my appointment?','Bring a few reference images and be ready to share your routine, recent chemical services, products, and anything you would like to change or preserve.'],
  ['Balayage timing','How long does a balayage appointment take?','Timing varies with hair length, density, starting color, color history, desired dimension, and the plan discussed during consultation. Exact timing would be confirmed before a real appointment.'],
  ['Color maintenance','How often should I refresh my color?','Maintenance depends on the color technique, your natural growth, desired finish, home routine, and how softly or distinctly you want the color to evolve.'],
  ['Bridal services','How do bridal and special-event services work?','The bridal concept includes an initial conversation, look planning, a trial when appropriate, wedding-day coordination, and discussion of bridal-party needs. Availability is not live on this demo website.'],
  ['Combined services','Can I combine more than one service?','Possibly. Some services can be thoughtfully planned together, while others may need separate appointments. A consultation is the best place to discuss the complete goal.'],
  ['Hair textures','Do you work with different hair textures?','The service approach should consider texture, density, current condition, styling routine, and the finish you want to maintain. Share these details during consultation.'],
  ['Choosing a service','What if I am not sure which service to choose?','Start with the result you want rather than a technical service name. Explore the service pages, then use Contact to describe your goal and ask which appointment is the best fit.'],
  ['Walk-ins','Do you accept walk-ins?','Walk-in availability is not represented on this demonstration website. A real studio would confirm its current policy and availability directly.'],
  ['Online booking','Can I book online through this website?','Not yet. The Book page contains a visual placeholder for a future calendar. This demo does not show live availability or create an appointment.'],
]

export default function FAQ(){return <main className="faq-page">
  <header className="faq-intro"><p className="eyebrow">QUESTIONS, ANSWERED</p><h1>Good to<br/><em>know.</em></h1><p className="lead">A clear appointment starts with the right questions. These demonstration answers explain how the future studio experience is intended to work.</p></header>
  <section className="faq-list">{qs.map(([label,q,a],i)=><details key={q}><summary><span className="faq-number">{String(i+1).padStart(2,'0')}</span><span className="faq-question"><small>{label}</small>{q}</span><b>+</b></summary><p>{a}</p></details>)}</section>
  <section className="faq-cta"><h2>Still deciding where to begin?</h2><p>Tell us what you have in mind and use the demo contact experience to organize your questions.</p><Link className="button" href="/contact">Contact the Studio</Link></section>
</main>}
