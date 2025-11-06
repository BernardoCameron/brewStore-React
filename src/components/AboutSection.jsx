"use client";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="nosotros" className="about-section section-padding bg-[var(--blanco-puro)]">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2">
            <h2 className="section-title text-left">Nuestra Historia</h2>
            <p className="lead text-[var(--texto-secundario)] mb-4">
              Desde 2015, Brewstore ha sido sinónimo de calidad y tradición en el mundo de la
              cerveza artesanal.
            </p>
            <p className="text-[var(--texto-secundario)] mb-4">
              Comenzamos como un pequeño proyecto familiar con la pasión de crear cervezas únicas y
              memorables. Hoy, somos reconocidos por nuestra dedicación a la excelencia y nuestro
              compromiso con ingredientes de la más alta calidad.
            </p>
            <p className="text-[var(--texto-secundario)] mb-4">
              Cada botella que producimos lleva consigo años de experiencia, innovación constante y
              el amor por el arte de la cervecería. Nuestro equipo de maestros cerveceros trabaja
              incansablemente para ofrecerte sabores únicos que despierten tus sentidos.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-6">
              <div>
                <h4 className="text-[var(--acento-lupulo)] text-2xl font-bold">100%</h4>
                <p className="text-[var(--texto-secundario)]">Ingredientes Naturales</p>
              </div>
              <div>
                <h4 className="text-[var(--acento-lupulo)] text-2xl font-bold">Artesanal</h4>
                <p className="text-[var(--texto-secundario)]">Proceso Tradicional</p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <Image
              src="/img-historia.jpg"
              alt="Maestro Cervecero"
              width={600}
              height={400}
              className="rounded-lg shadow-md object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
