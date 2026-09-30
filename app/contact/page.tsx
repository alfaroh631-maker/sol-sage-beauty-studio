import type { Metadata } from 'next'

export const metadata: Metadata={title:'Contact | Sol & Sage Beauty Studio',description:'Contact the fictional Sol & Sage Beauty Studio through a clearly identified demonstration form.',alternates:{canonical:'/contact',languages:{'en-US':'/contact','es-US':'/es/contacto'}},openGraph:{url:'/contact',images:[{url:'/images/hero.webp',width:1536,height:1024,alt:'Sol & Sage Beauty Studio in Santa Barbara'}],title:'Contact | Sol & Sage Beauty Studio',description:'Demonstration contact page for Sol & Sage Beauty Studio.'}}

const services=['Haircuts & Styling','Hair Color','Highlights & Balayage','Blowouts','Hair Treatments','Bridal & Special Events','Makeup Services','Not sure yet']

export default function Contact(){return <main className="contact-page">
  <header className="contact-intro"><p className="eyebrow">LET&apos;S CONNECT</p><h1>Tell us what<br/><em>you have in mind.</em></h1><p className="lead">Share your service interest, preferred date, and any questions. This form is a visual demonstration until the website is connected to a live contact system.</p><div className="contact-details"><div><span>CALL</span><a href="tel:+18055550174">(805) 555-0174</a></div><div><span>EMAIL</span><a href="mailto:hello@solandsagebeauty.com">hello@solandsagebeauty.com</a></div><div><span>LOCATION</span><p>Santa Barbara, California</p></div></div></header>
  <section className="contact-form-wrap">
    <div className="demo-banner"><span>DEMO FORM</span><p>No information entered here will be transmitted, stored, or used to create an appointment.</p></div>
    <form className="demo-form">
      <div className="field"><label htmlFor="name">Full Name</label><input id="name" name="name" autoComplete="name" required/></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel"/></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required/></div>
      <div className="field"><label htmlFor="service">Service Interested In</label><select id="service" name="service" defaultValue=""><option value="" disabled>Select a service</option>{services.map(s=><option key={s}>{s}</option>)}</select></div>
      <div className="field"><label htmlFor="date">Preferred Date</label><input id="date" name="date" type="date"/></div>
      <div className="field field-wide"><label htmlFor="message">Message</label><textarea id="message" name="message" rows={5} placeholder="Tell us about your goals, questions, or occasion."/></div>
      <input type="hidden" name="preferred-language" value="English"/>
      <button className="button" type="button" aria-disabled="true">Demo — Nothing will be sent</button>
    </form>
  </section>
</main>}
