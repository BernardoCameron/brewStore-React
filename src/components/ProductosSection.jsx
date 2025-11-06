"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import supabase from "@/lib/supabaseClient";
import { useCart } from "@/context/CartContext";

export default function ProductosSection() {
  const [productos, setProductos] = useState([]);
  const [cantidades, setCantidades] = useState({});
  const [loading, setLoading] = useState(true);
  const { addToCart } = useCart();

  useEffect(() => {
    async function fetchProductos() {
      setLoading(true);
      const { data, error } = await supabase
        .from("producto")
        .select("*")
        .eq("destacado", true)
        .order("id", { ascending: true })
        .limit(8);

      if (error) console.error("Error al obtener productos:", error);
      else {
        setProductos(data || []);
        const inicial = {};
        data?.forEach((p) => (inicial[p.id] = 1));
        setCantidades(inicial);
      }
      setLoading(false);
    }
    fetchProductos();
  }, []);

  const formatCurrency = (value) =>
    value?.toLocaleString("es-CL", {
      style: "currency",
      currency: "CLP",
      minimumFractionDigits: 0,
    }) ?? "$0";

  const cambiarCantidad = (id, valor) => {
    setCantidades((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + valor),
    }));
  };

  if (loading)
    return (
      <section id="productos" className="section-padding">
        <div className="container mx-auto text-center py-10">
          <p className="text-[var(--texto-secundario)]">Cargando productos...</p>
        </div>
      </section>
    );

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
                  src={prod.imagen || "/ipa-dorada.png"}
                  alt={prod.nombre}
                  width={400}
                  height={300}
                  className="rounded-lg mx-auto mb-4 object-cover"
                />
                <h3 className="card-title text-lg mb-2">{prod.nombre}</h3>
                <p className="card-text text-sm mb-3">{prod.descripcion}</p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <span className="price block font-semibold">{formatCurrency(prod.precio)}</span>

                <div className="flex items-center justify-center gap-2">
                  <div className="flex items-center border rounded-md overflow-hidden">
                    <button
                      onClick={() => cambiarCantidad(prod.id, -1)}
                      className="px-2 font-bold"
                      style={{ color: "var(--secundario-malta)" }}
                    >
                      −
                    </button>
                    <span className="px-3 select-none">{cantidades[prod.id] || 1}</span>
                    <button
                      onClick={() => cambiarCantidad(prod.id, 1)}
                      className="px-2 font-bold"
                      style={{ color: "var(--secundario-malta)" }}
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() =>
                      addToCart(
                        {
                          id: prod.id,
                          nombre: prod.nombre,
                          imagen: prod.imagen || "/ipa-dorada.png",
                          precio: Number(prod.precio) || 0,
                          descripcion: prod.descripcion || "",
                        },
                        cantidades[prod.id] || 1
                      )
                    }
                    className="btn-primary-custom text-sm px-4 py-2 rounded-full font-semibold"
                    title="Añadir al carrito"
                  >
                    Añadir
                  </button>
                </div>
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
