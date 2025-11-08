import { render, screen } from "@testing-library/react";
import Navbar from "@/components/Navbar";
import { CartProvider } from "@/context/CartContext";

describe("Navbar component", () => {
  test("muestra el título BrewStore", () => {
    render(
      <CartProvider>
        <Navbar />
      </CartProvider>
    );
    expect(screen.getByText(/BrewStore/i)).toBeInTheDocument();
  });
});
