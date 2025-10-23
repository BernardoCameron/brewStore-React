"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function ProductosPage() {
  const [productos, setProductos] = useState([]);
  const [categorias, setCategorias] = useState([]);
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("");
  const [loading, setLoading] = useState(false);

// paginador
  const [paginaActual, setPaginaActual] = useState(1);
  const productosPorPagina = 6;

//   get producto y categoria
  useEffect(() => {
    async function fetchProductos() {
      setLoading(true);

      let query = supabase.from("producto").select("*").order("id", { ascending: true });

      if (categoriaSeleccionada) {
        query = query.eq("categoria", categoriaSeleccionada.trim());
      }

      const { data, error } = await query;

      if (error) {
        console.error("Error al obtener productos:", error);
      } else {
        setProductos(data || []);
      }

      setLoading(false);
      setPaginaActual(1);
    }

    fetchProductos();
  }, [categoriaSeleccionada]);

  useEffect(() => {
    async function fetchCategorias() {
      const { data, error } = await supabase
        .from("categoria")
        .select("*")
        .order("id", { ascending: true });

      if (error) {
        console.error("❌ Error al obtener categorías:", error);
      } else {
        setCategorias(data || []);
      }
    }

    fetchCategorias();
  }, []);

//   paginador
  const indiceInicio = (paginaActual - 1) * productosPorPagina;
  const indiceFin = indiceInicio + productosPorPagina;
  const productosPaginados = productos.slice(indiceInicio, indiceFin);
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);

  function cambiarPagina(pagina) {
    if (pagina >= 1 && pagina <= totalPaginas) {
      setPaginaActual(pagina);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <main
      className="py-16 px-4 md:px-8"
      style={{ backgroundColor: "var(--bg-principal)" }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2
          className="section-title text-center mb-2"
          style={{ color: "var(--secundario-malta)" }}
        >
          Nuestros Productos
        </h2>

        <div className="flex justify-center mb-8">
          <select
            id="categoriaFiltro"
            value={categoriaSeleccionada}
            onChange={(e) => {
              setCategoriaSeleccionada(e.target.value);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="border rounded-md px-3 py-2"
            style={{
              backgroundColor: "white",
              borderColor: "rgba(0,0,0,0.1)",
              color: "var(--texto-principal)",
              minWidth: "220px",
            }}
          >
            <option value="">Todas las categorías</option>
            {categorias &&
              categorias.map((cat) => (
                <option key={cat.id} value={cat.id}>
                {cat.nombre}
                </option>
              ))}
          </select>
        </div>

        {/* cards productos */}
        {loading ? (
          <p className="text-center" style={{ color: "var(--texto-secundario)" }}>
            Cargando productos...
          </p>
        ) : productosPaginados.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productosPaginados.map((producto) => (
              <div
                key={producto.id}
                className="card card-custom p-6 flex flex-col justify-between"
                style={{
                  minHeight: "480px",
                  borderRadius: "18px",
                }}
              >
                <Image
                  src={producto.imagen || "/ipa-dorada.png"}
                  alt={producto.nombre}
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto mb-4 object-cover"
                />

                <div>
                  <h5
                    className="font-semibold text-lg mb-1"
                    style={{ color: "var(--secundario-malta)" }}
                  >
                    {producto.nombre}
                  </h5>
                  <p
                    className="text-sm mb-2"
                    style={{ color: "var(--texto-secundario)" }}
                  >
                    {producto.descripcion}
                  </p>
                  <p
                    className="font-bold mb-3"
                    style={{ color: "var(--acento-lupulo)" }}
                  >
                    {producto.precio?.toLocaleString("es-CL")} CLP
                  </p>
                </div>

                <div className="flex justify-between items-center mt-2">
                  <a
                    href={`/producto/${producto.id}`}
                    className="text-sm font-medium hover:underline"
                    style={{ color: "var(--secundario-malta)" }}
                  >
                    Ver producto
                  </a>

                  <div className="flex items-center gap-2">
                    <input
                      type="number"
                      min="1"
                      defaultValue="1"
                      className="w-14 border rounded-md text-center"
                      style={{
                        borderColor: "rgba(0,0,0,0.2)",
                        color: "var(--texto-principal)",
                      }}
                    />
                    <button
                      className="flex items-center justify-center rounded-full"
                      style={{
                        backgroundColor: "var(--primario-amber)",
                        width: "40px",
                        height: "40px",
                        color: "var(--texto-principal)",
                        fontWeight: "bold",
                        boxShadow: "0 2px 4px rgba(0,0,0,0.15)",
                      }}
                      title="Agregar al carrito"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center" style={{ color: "var(--texto-secundario)" }}>
            No hay productos disponibles en esta categoría.
          </p>
        )}

        {/* render paginador */}
        {totalPaginas > 1 && (
          <div className="flex justify-center mt-10 gap-2">
            <button
              onClick={() => cambiarPagina(paginaActual - 1)}
              disabled={paginaActual === 1}
              className="px-3 py-1 border rounded disabled:opacity-40"
              style={{
                borderColor: "var(--secundario-malta)",
                color: "var(--secundario-malta)",
              }}
            >
              ←
            </button>

            {[...Array(totalPaginas)].map((_, i) => (
              <button
                key={i}
                onClick={() => cambiarPagina(i + 1)}
                className={`px-3 py-1 border rounded ${
                  paginaActual === i + 1 ? "bg-[var(--primario-amber)]" : ""
                }`}
                style={{
                  borderColor: "var(--secundario-malta)",
                  color: "var(--secundario-malta)",
                  fontWeight: paginaActual === i + 1 ? "bold" : "normal",
                }}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => cambiarPagina(paginaActual + 1)}
              disabled={paginaActual === totalPaginas}
              className="px-3 py-1 border rounded disabled:opacity-40"
              style={{
                borderColor: "var(--secundario-malta)",
                color: "var(--secundario-malta)",
              }}
            >
              →
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
