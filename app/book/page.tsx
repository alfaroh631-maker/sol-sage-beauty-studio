import Script from "next/script";

export default function Book() {
  return (
    <main className="inner">
      <p className="eyebrow">SOL & SAGE BEAUTY STUDIO</p>
      <h1>Book a Beauty<br /><em>Appointment.</em></h1>
      <p className="lead">Choose the date and time that works best for you.</p>

      <iframe
        src="https://link.mganexusgo.com/widget/booking/ZfungeoYON6kXEUguVCJ"
        allow="payment"
        style={{ width: "100%", minHeight: "850px", border: "none", overflow: "hidden" }}
        scrolling="no"
        title="Book a Beauty Appointment"
      />

      <Script
        src="https://link.mganexusgo.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
