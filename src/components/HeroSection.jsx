"use client";
import Link from "next/link";
import { Barrel } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="inicio" className="hero-section flex items-center">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-2/3 hero-content text-[var(--blanco-puro)]">
            <h1 >Brewstore</h1>
            <p className="text-lg mb-6">
              Cerveza artesanal de la más alta calidad, elaborada con pasión y
              tradición desde 2015
            </p>
            <Link
              href="#productos"
              className="btn-primary-custom inline-flex items-center gap-2"
            >
              <Barrel size={20} />
              Descubre Nuestras Cervezas
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
