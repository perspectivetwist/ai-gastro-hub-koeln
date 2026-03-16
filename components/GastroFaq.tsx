'use client'

import { useState } from 'react'

const faqItems = [
  {
    question: 'Was ist KI-Sichtbarkeit für Restaurants?',
    answer: 'Wenn jemand ChatGPT, Perplexity oder Google AI fragt "Welches Restaurant empfiehlst du in Berlin?", durchsuchen diese KI-Systeme das Internet. Restaurants die schlecht strukturierte Websites haben werden nicht gefunden und nicht empfohlen — egal wie gut das Essen ist.',
  },
  {
    question: 'Welche Scanner gibt es für Restaurants?',
    answer: 'AI Shift Drift bietet 4 kostenlose Scanner: AEO-Scanner (Website-Lesbarkeit für KI), GEO-Scanner (digitaler Ruf und Reputation), Agent-Readiness (Buchbarkeit für KI-Agenten) und Quantum (Sicherheit gegen KI-Angriffe wie Fake-Bewertungen).',
  },
  {
    question: 'Was ist der Unterschied zwischen AEO und GEO?',
    answer: 'AEO (Answer Engine Optimization) prüft ob KI-Systeme deine Website lesen und zitieren können. GEO (Generative Engine Optimization) prüft deinen digitalen Ruf — Bewertungen, Erwähnungen, Brancheneinträge. Ein Restaurant braucht beides um vollständig KI-sichtbar zu sein.',
  },
  {
    question: 'Was kostet das?',
    answer: 'Alle 4 Scans sind kostenlos. Du bekommst deinen Score und eine Übersicht der Kriterien. Den vollständigen Aktionsplan mit priorisierten Maßnahmen gibt es nach Email-Eingabe.',
  },
  {
    question: 'Wie schnell sehe ich Ergebnisse?',
    answer: 'Der Scan dauert 60 Sekunden. Erste Verbesserungen können innerhalb von 1-2 Wochen in KI-Suchen sichtbar werden.',
  },
  {
    question: 'Was passiert mit meinen Daten?',
    answer: 'Wir speichern keine Website-Inhalte. Der Scan läuft in Echtzeit und die Ergebnisse werden nur in deinem Browser angezeigt. DSGVO-konform, Made in Germany.',
  },
  {
    question: 'Gilt das nur für Restaurants in Berlin?',
    answer: 'Nein. Die Scanner funktionieren für jedes Restaurant, Café, Hotel oder Gastro-Betrieb in Deutschland, Österreich und der Schweiz.',
  },
  {
    question: 'Mein Restaurant hat viele Google-Bewertungen — reicht das nicht?',
    answer: 'Google-Bewertungen allein reichen nicht. ChatGPT liest primär strukturierte Website-Inhalte. Wenn deine Website kein Schema Markup hat, keine FAQ-Seite und keinen maschinenlesbaren Content — bleibt dein Restaurant unsichtbar, egal wie viele Sterne du hast.',
  },
]

export default function GastroFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="relative py-24 px-6 max-w-3xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Häufige <span className="gradient-accent">Fragen.</span>
      </h2>
      <div className="space-y-3">
        {faqItems.map((item, i) => {
          const isOpen = openIndex === i
          return (
            <div
              key={i}
              className="border rounded-lg overflow-hidden"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: "rgba(255,255,255,0.03)",
              }}
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left cursor-pointer"
              >
                <span className="font-medium text-white text-sm pr-4">
                  {item.question}
                </span>
                <span
                  className="text-lg shrink-0"
                  style={{ color: "#888" }}
                >
                  {isOpen ? "−" : "+"}
                </span>
              </button>
              {isOpen && (
                <div className="px-5 pb-5 -mt-1">
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#cccccc" }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          )
        })}
      </div>
    </section>
  )
}
