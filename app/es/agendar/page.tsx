import Script from "next/script";

export default function Agendar() {
  return (
    <main className="inner">
      <p className="eyebrow">SOL & SAGE BEAUTY STUDIO</p>
      <h1>Agenda una<br /><em>cita de belleza.</em></h1>
      <p className="lead">Elige la fecha y el horario que mejor te convengan.</p>

      <iframe
        src="https://link.mganexusgo.com/widget/booking/ZfungeoYON6kXEUguVCJ"
        allow="payment"
        style={{ width: "100%", minHeight: "850px", border: "none", overflow: "hidden" }}
        scrolling="no"
        title="Agenda una cita de belleza"
      />

      <Script
        src="https://link.mganexusgo.com/js/form_embed.js"
        strategy="afterInteractive"
      />
    </main>
  );
}
