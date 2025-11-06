"use client";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { X, Trash2 } from "lucide-react";

export default function CartDrawer() {
  const { cart, isOpen, toggleCart, updateQuantity, removeFromCart, total } = useCart();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-black/50 transition-opacity"
      onClick={toggleCart}
    >
      <div
        className="bg-white w-full max-w-md h-full shadow-2xl p-6 overflow-y-auto transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-xl font-semibold text-gray-800">Carrito de compras</h2>
          <button onClick={toggleCart} className="text-gray-500 hover:text-gray-700">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Productos */}
        {cart.length === 0 ? (
          <p className="text-gray-500 text-center mt-10">Tu carrito está vacío.</p>
        ) : (
          <ul className="divide-y divide-gray-200">
            {cart.map((item) => (
              <li key={item.id} className="flex py-4">
                <div className="w-20 h-20 flex-shrink-0 overflow-hidden rounded-md border">
                  <Image
                    src={item.imagen || "/ipa-dorada.png"}
                    alt={item.nombre}
                    width={80}
                    height={80}
                    className="object-cover w-full h-full"
                  />
                </div>

                <div className="ml-4 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between">
                    <h3 className="text-gray-800 font-medium">{item.nombre}</h3>
                    <p className="text-gray-900 font-semibold">
                      {(item.precio * item.cantidad).toLocaleString("es-CL")} CLP
                    </p>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item.id, -1)}
                        className="px-2 font-bold text-gray-700 hover:text-black"
                      >
                        −
                      </button>
                      <span className="px-3 select-none">{item.cantidad}</span>
                      <button
                        onClick={() => updateQuantity(item.id, 1)}
                        className="px-2 font-bold text-gray-700 hover:text-black"
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}

        {/* Total y acciones */}
        {cart.length > 0 && (
          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span>{total.toLocaleString("es-CL")} CLP</span>
            </div>

            <button className="w-full bg-[var(--primario-amber)] text-[var(--secundario-malta)] font-bold py-3 rounded-full hover:bg-[#e6ac00] transition">
              Finalizar Compra
            </button>

            <button
              onClick={toggleCart}
              className="w-full text-sm text-gray-600 mt-3 hover:underline"
            >
              Seguir comprando
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
