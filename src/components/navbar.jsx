"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react"; 



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar-custom shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-3">
        {/* logo */}
        <Link href="/" className="flex items-center navbar-brand">
          <Image
            src="/logo.png"
            alt="BrewStore logo"
            width={60}
            height={60}
            className="mr-3"
          />
          <span className="text-2xl font-bold text-[var(--blanco-puro)]">
            BrewStore
          </span>
        </Link>

        {/* menu movil */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-[var(--blanco-puro)] md:hidden focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        {/* links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:space-x-6 absolute md:static top-full left-0 w-full md:w-auto bg-[var(--secundario-malta)] md:bg-transparent text-center md:text-left`}
        >
          <div className="flex flex-col md:flex-row md:items-center md:space-x-6">
            <Link
              href="/"
              className="block py-2 text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/productos"
              className="block py-2 text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] font-medium"
            >
              Productos
            </Link>
            <Link
              href="/nosotros"
              className="block py-2 text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] font-medium"
            >
              Nosotros
            </Link>
            <Link
              href="/contacto"
              className="block py-2 text-[var(--blanco-puro)] hover:text-[var(--primario-amber)] font-medium"
            >
              Contacto
            </Link>
          </div>

          {/* botones */}
          <div className="flex justify-center md:justify-start items-center space-x-3 mt-3 md:mt-0 md:ml-6">
            <Link href="/login">
              <button className="bg-[var(--primario-amber)] text-[var(--secundario-malta)] font-bold px-5 py-2 rounded-full hover:bg-[#e6ac00] transition-all">
                Iniciar Sesión
            </button>
            </Link>


            <button className="bg-[var(--primario-amber)] p-2 rounded-full hover:bg-[#e6ac00] transition-all">
              <ShoppingCart className="text-[var(--secundario-malta)] w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
