"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/lib/supabaseClient";

export default function ProductosSection() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProductos() {
      setLoading(true);

    const { data, error } = await supabase
      .from("producto")
      .select("*")
      .eq("destacado", true)
      .order("id", { ascending: true })
      .limit(8);
      console.log("DATA:", data);
      console.log("ERROR:", error);

      if (error) {
        console.error("Error al obtener productos:", error);
      } else {
        setProductos(data || []);
      }

      setLoading(false);
    }

    fetchProductos();
  }, []);

  function formatCurrency(value) {
    if (!value) return "$0";
    return value.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    });
  }

  if (loading) {
    return (
      <section id="productos" className="section-padding">
        <div className="container mx-auto text-center py-10">
          <p className="text-[var(--texto-secundario)]">Cargando productos...</p>
        </div>
      </section>
    );
  }

  return (
    <section id="productos" className="section-padding">
      <div className="container mx-auto px-6">
        <h2 className="section-title">Nuestros Packs de Cerveza Artesanal</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-10">
          {productos.map((prod) => (
            <div
              key={prod.id}
              className="card-custom flex flex-col justify-between p-4 text-center"
            >
              <div>
                <Image
                  src={prod.imagen}
                  alt={prod.nombre}
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="card-title text-lg mb-2">{prod.nombre}</h3>
                <p className="card-text text-sm mb-3">{prod.descripcion}</p>
              </div>
              <div>
                <span className="price block mb-2">{formatCurrency(prod.precio)} CLP</span>
                <button className="btn-primary-custom text-sm px-6 py-2">
                  Añadir al carrito
                </button>
              </div>
            </div>
          ))}

          {productos.length === 0 && (
            <p className="col-span-full text-center text-[var(--texto-secundario)]">
              No hay productos destacados disponibles.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
