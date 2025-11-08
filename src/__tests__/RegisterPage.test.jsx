/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import RegisterPage from "@/app/register/page";
import supabase from "@/lib/supabaseClient";

jest.mock("@/lib/supabaseClient");

describe("RegisterPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();

    delete window.location;
    window.location = { href: "", assign: jest.fn() };
  });

  test("muestra mensaje de éxito y redirige al login", async () => {
    supabase.auth.signUp.mockResolvedValue({
      data: { user: { email: "test@example.com" } },
      error: null,
    });
    supabase.auth.signOut.mockResolvedValue({ error: null });

    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText(/Nombre de Usuario/i), {
      target: { value: "Bernardo" },
    });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "bernardo@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "123456" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Registrarme/i }));

    await waitFor(() => expect(screen.getByText(/Registro exitoso/i)).toBeInTheDocument(), {
      timeout: 2000,
    });

    await waitFor(() => {
      expect(window.location.href).toBe("/login");
    });
  });

  test("muestra mensaje de error si Supabase devuelve error", async () => {
    supabase.auth.signUp.mockResolvedValue({
      data: null,
      error: { message: "Correo ya registrado" },
    });

    render(<RegisterPage />);

    fireEvent.change(screen.getByLabelText(/Nombre de Usuario/i), {
      target: { value: "Bernardo" },
    });
    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "bernardo@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "123456" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Registrarme/i }));

    await waitFor(() => expect(screen.getByText(/Correo ya registrado/i)).toBeInTheDocument());
  });
});
