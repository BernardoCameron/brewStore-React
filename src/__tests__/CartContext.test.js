import { renderHook, act } from "@testing-library/react";
import { CartProvider, useCart } from "../../src/context/CartContext";

describe("CartContext", () => {
  test("agrega un producto al carrito", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
    const producto = { id: 1, nombre: "IPA Brew", precio: 5000 };

    act(() => result.current.addToCart(producto, 2));

    expect(result.current.cart.length).toBe(1);
    expect(result.current.cart[0].cantidad).toBe(2);
  });

  test("incrementa cantidad existente", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
    const prod = { id: 1, nombre: "IPA", precio: 1000 };

    act(() => result.current.addToCart(prod, 1));
    act(() => result.current.addToCart(prod, 2));

    expect(result.current.cart[0].cantidad).toBe(3);
  });

  test("updateQuantity no baja de 1", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
    const prod = { id: 1, nombre: "IPA", precio: 1000 };
    act(() => result.current.addToCart(prod, 1));
    act(() => result.current.updateQuantity(1, -5));

    expect(result.current.cart[0].cantidad).toBe(1);
  });

  test("removeFromCart elimina el producto", () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
    const prod = { id: 1, nombre: "IPA", precio: 1000 };
    act(() => result.current.addToCart(prod, 1));
    act(() => result.current.removeFromCart(1));

    expect(result.current.cart.length).toBe(0);
  });
});
