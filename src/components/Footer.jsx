"use client";
import { Facebook, Instagram, Twitter, Youtube, Beer } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer-custom">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 py-12">
          <div>
            <h5 className="text-[var(--blanco-puro)] font-bold mb-3 flex items-center gap-2">
              <Beer /> Brewstore
            </h5>
            <p className="text-[var(--bg-principal)] mb-4">
              Cerveza artesanal de calidad premium, elaborada con pasión y tradición desde 2015.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          <div>
            <h5>Productos</h5>
            <ul className="list-unstyled space-y-1">
              <li><a href="#">IPA Dorada</a></li>
              <li><a href="#">Stout Imperial</a></li>
              <li><a href="#">Wheat Ale</a></li>
              <li><a href="#">Red Ale</a></li>
            </ul>
          </div>

          <div>
            <h5>Empresa</h5>
            <ul className="list-unstyled space-y-1">
              <li><a href="#">Sobre Nosotros</a></li>
              <li><a href="#">Nuestro Proceso</a></li>
              <li><a href="#">Premios</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h5>Soporte</h5>
            <ul className="list-unstyled space-y-1">
              <li><a href="#">Contacto</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Envíos</a></li>
              <li><a href="#">Devoluciones</a></li>
            </ul>
          </div>

          <div>
            <h5>Legal</h5>
            <ul className="list-unstyled space-y-1 ">
              <li><a href="#">Términos</a></li>
              <li><a href="#">Privacidad</a></li>
              <li><a href="#">Cookies</a></li>
              <li><a href="#">Licencias</a></li>
            </ul>
          </div>
        </div>

        <hr className="border-t border-[var(--bg-principal)]" />

        <div className="text-center py-4 text-[var(--bg-principal)] text-sm">
          <p>
            &copy; 2025 Brewstore. Todos los derechos reservados. | Disfruta con responsabilidad.
          </p>
        </div>
      </div>
    </footer>
  );
}
