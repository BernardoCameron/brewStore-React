/**
 * @jest-environment jsdom
 */
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import LoginPage from "@/app/login/page";
import supabase from "@/lib/supabaseClient";

// 🔹 Mock Supabase
jest.mock("@/lib/supabaseClient", () => ({
  auth: {
    signInWithPassword: jest.fn(),
  },
}));

describe("LoginPage", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    delete window.location;
    window.location = { href: "" };
  });

  test("redirige al inicio cuando el login es exitoso", async () => {
    supabase.auth.signInWithPassword.mockResolvedValue({
      data: { user: { email: "user@test.com" } },
      error: null,
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "user@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "123456" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Ingresar/i }));

    await waitFor(() => {
      expect(window.location.href).toBe("/");
    });

    expect(supabase.auth.signInWithPassword).toHaveBeenCalledWith({
      email: "user@test.com",
      password: "123456",
    });
  });

  test("muestra mensaje de error si las credenciales son incorrectas", async () => {
    supabase.auth.signInWithPassword.mockResolvedValue({
      data: null,
      error: { message: "Credenciales incorrectas" },
    });

    render(<LoginPage />);

    fireEvent.change(screen.getByLabelText(/Correo Electrónico/i), {
      target: { value: "wrong@test.com" },
    });
    fireEvent.change(screen.getByLabelText(/Contraseña/i), {
      target: { value: "wrongpass" },
    });

    fireEvent.submit(screen.getByRole("button", { name: /Ingresar/i }));

    await waitFor(() => {
      expect(screen.getByText(/Credenciales incorrectas/i)).toBeInTheDocument();
    });
  });
});
