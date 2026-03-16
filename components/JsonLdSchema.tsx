export default function JsonLdSchema() {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "AI Shift Drift",
    "url": "https://ai-gastro-hub.vercel.app",
    "sameAs": ["https://github.com/perspectivetwist"]
  }

  const site = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "AI Gastro Hub",
    "url": "https://ai-gastro-hub.vercel.app",
    "description": "4 kostenlose KI-Scanner für Restaurants"
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(site) }} />
    </>
  )
}
