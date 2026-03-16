export default function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden py-24 px-6 max-w-5xl mx-auto"
      style={{ zIndex: 1 }}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-16">
        Vier Gastro-Scanner,{" "}
        <span className="gradient-accent">drei Dimensionen.</span>
      </h2>

      <div className="flex flex-col gap-16">
        {/* WAKE — Sichtbarkeit */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="text-base tracking-widest uppercase font-bold gradient-wake">
              Wake
            </div>
            <div style={{ color: "#444" }}>→</div>
            <div style={{ color: "#666" }}>Sichtbarkeit</div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* AEO Scanner */}
            <a
              href="https://aeo-gastro.vercel.app"
              className="flex gap-0 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div
                className="w-1 flex-shrink-0"
                style={{ background: "#00AAFF" }}
              />
              <div className="p-6">
                <div
                  style={{ color: "#00AAFF" }}
                  className="font-bold mb-2"
                >
                  AEO Scanner
                </div>
                <div
                  style={{ color: "#cccccc" }}
                  className="text-sm mb-4"
                >
                  Kann ChatGPT deine Restaurant-Website lesen? 8 Kriterien. Score
                  in Sekunden.
                </div>
                <span
                  className="text-xs px-4 py-1.5 rounded-full border"
                  style={{ borderColor: "#00AAFF", color: "#00AAFF" }}
                >
                  Jetzt prüfen
                </span>
              </div>
            </a>
            {/* GEO Scanner */}
            <a
              href="https://geo-gastro.vercel.app"
              className="flex gap-0 rounded-lg overflow-hidden hover:opacity-90 transition-opacity"
              style={{ background: "rgba(0,0,0,0.4)" }}
            >
              <div
                className="w-1 flex-shrink-0"
                style={{ background: "#00FF88" }}
              />
              <div className="p-6">
                <div
                  style={{ color: "#00FF88" }}
                  className="font-bold mb-2"
                >
                  GEO Scanner
                </div>
                <div
                  style={{ color: "#cccccc" }}
                  className="text-sm mb-4"
                >
                  Kennt ChatGPT den Ruf deines Restaurants? Bewertungen,
                  Erwähnungen, Profil.
                </div>
                <span
                  className="text-xs px-4 py-1.5 rounded-full border"
                  style={{ borderColor: "#00FF88", color: "#00FF88" }}
                >
                  Jetzt prüfen
                </span>
              </div>
            </a>
          </div>
        </div>

        {/* SLIPSTREAM — Nutzbarkeit */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{ color: "#FFE600" }}
              className="text-base tracking-widest uppercase font-bold"
            >
              Slipstream
            </div>
            <div style={{ color: "#444" }}>→</div>
            <div style={{ color: "#666" }}>Nutzbarkeit</div>
          </div>
          <a
            href="https://agentready-gastro.vercel.app"
            className="flex gap-0 rounded-lg overflow-hidden hover:opacity-90 transition-opacity max-w-[calc(50%-0.5rem)]"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div
              className="w-1 flex-shrink-0"
              style={{ background: "#FFE600" }}
            />
            <div className="p-6">
              <div
                style={{ color: "#FFE600" }}
                className="font-bold mb-2"
              >
                Agent Ready Scanner
              </div>
              <div
                style={{ color: "#cccccc" }}
                className="text-sm mb-4"
              >
                Kann ein KI-Agent bei deinem Restaurant einen Tisch reservieren?
              </div>
              <span
                className="text-xs px-4 py-1.5 rounded-full border"
                style={{ borderColor: "#FFE600", color: "#FFE600" }}
              >
                Jetzt prüfen
              </span>
            </div>
          </a>
        </div>

        {/* QUANTUM — Sicherheit */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div
              style={{ color: "#FF1744" }}
              className="text-base tracking-widest uppercase font-bold"
            >
              Quantum
            </div>
            <div style={{ color: "#444" }}>→</div>
            <div style={{ color: "#666" }}>Sicherheit</div>
          </div>
          <a
            href="https://aisecurity-gastro.vercel.app"
            className="flex gap-0 rounded-lg overflow-hidden hover:opacity-90 transition-opacity max-w-[calc(50%-0.5rem)]"
            style={{ background: "rgba(0,0,0,0.4)" }}
          >
            <div
              className="w-1 flex-shrink-0"
              style={{ background: "#FF1744" }}
            />
            <div className="p-6">
              <div
                style={{ color: "#FF1744" }}
                className="font-bold mb-2"
              >
                Security Scanner
              </div>
              <div
                style={{ color: "#cccccc" }}
                className="text-sm mb-4"
              >
                Ist dein Restaurant vor KI-Angriffen geschützt?
                Fake-Bewertungen, Phishing, Datenmissbrauch.
              </div>
              <span
                className="text-xs px-4 py-1.5 rounded-full border"
                style={{ borderColor: "#FF1744", color: "#FF1744" }}
              >
                Sicherheit prüfen
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Jellyfish Background Image */}
      <img
        src="/images/jellyfish-hero.png"
        alt=""
        className="hidden md:block absolute top-1/2 -translate-y-1/2 right-0 translate-x-1/4 w-[420px]"
        style={{ opacity: 0.8, zIndex: 0, pointerEvents: "none" }}
      />
    </section>
  );
}
