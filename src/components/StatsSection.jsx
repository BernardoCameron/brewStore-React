"use client";

export default function StatsSection() {
  return (
    <section className="stats-section section-padding">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 text-center gap-8">
          <div>
            <div className="stat-number">15+</div>
            <p className="text-[var(--blanco-puro)]">Variedades de Cerveza</p>
          </div>

          <div>
            <div className="stat-number">8</div>
            <p className="text-[var(--blanco-puro)]">Años de Experiencia</p>
          </div>

          <div>
            <div className="stat-number">5000+</div>
            <p className="text-[var(--blanco-puro)]">Clientes Satisfechos</p>
          </div>

          <div>
            <div className="stat-number">3</div>
            <p className="text-[var(--blanco-puro)]">Premios Internacionales</p>
          </div>
        </div>
      </div>
    </section>
  );
}
