"use client";
import { MapPin, Phone, Mail, Send } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contacto" className="section-padding bg-[var(--bg-principal)]">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-10 text-[var(--secundario-malta)]">
          Contáctanos
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <div className="card-custom p-8">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Mensaje enviado con éxito 🍻");
              }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block mb-2 font-semibold">
                    Nombre
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primario-amber)]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-semibold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primario-amber)]"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="asunto" className="block mb-2 font-semibold">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primario-amber)]"
                />
              </div>

              <div className="mt-6">
                <label htmlFor="mensaje" className="block mb-2 font-semibold">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  rows="5"
                  required
                  className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[var(--primario-amber)]"
                ></textarea>
              </div>

              <div className="text-center mt-8">
                <button
                  type="submit"
                  className="btn-primary-custom inline-flex items-center gap-2 text-sm px-8 py-3 rounded-full font-semibold transition-all duration-300"
                >
                  <Send size={18} /> Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card-custom text-center p-6 h-full">
            <MapPin
              className="mx-auto mb-3"
              size={36}
              color="var(--primario-amber)"
            />
            <h5 className="font-semibold text-[var(--blanco-puro)]">
              Ubicación
            </h5>
            <p className="text-[var(--texto-secundario)] mt-2">
              Calle Cervecera 123<br />
              Ciudad Artesanal, CA 12345
            </p>
          </div>

          <div className="card-custom text-center p-6 h-full">
            <Phone
              className="mx-auto mb-3"
              size={36}
              color="var(--primario-amber)"
            />
            <h5 className="font-semibold text-[var(--blanco-puro)]">
              Teléfono
            </h5>
            <p className="text-[var(--texto-secundario)] mt-2">
              +56 9 1234 5678
              <br />
              Lun - Vie: 9AM - 6PM
            </p>
          </div>

          <div className="card-custom text-center p-6 h-full">
            <Mail
              className="mx-auto mb-3"
              size={36}
              color="var(--primario-amber)"
            />
            <h5 className="font-semibold text-[var(--blanco-puro)]">Email</h5>
            <p className="text-[var(--texto-secundario)] mt-2">
              info@brewstore.com
              <br />
              ventas@brewstore.com
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
